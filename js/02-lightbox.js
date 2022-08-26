import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const createGalleryMarkup = galleryItems
  .map(
    (item) => `<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      title="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup);

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  let gallery = new SimpleLightbox(".gallery a");
  gallery.on("show.simplelightbox", function () {
    gallery.captionDelay = 250;
  });
});

//  <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>;

// {/* <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>; */}

console.log(galleryItems);
