// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// const galleryList = document.querySelector(".gallery");

// let galleryMarkup = galleryItems
//   .map(({ preview, original, description }) => {
//     return `<li class="gallery__item">
//     <a class="gallery__link" href=${original}>
//         <img 
//         class="gallery__image" 
//         src=${preview} 
//         data-source=${original} 
//         alt=${description} 
//         />
//     </a>
// </li>`;
//   })
//   .join("");

// galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);

// galleryList.addEventListener("click", openModal);

// function openModal(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains('gallery__image')) return;
//   const instance = basicLightbox.create(
//     `<img class="gallery_image" src="${event.target.dataset.source}"/>`,
//     {
//       onShow: (instance) => {
//         document.addEventListener("keydown", closeModalEsc);
//       },
//       onHide: (instance) => {
//         document.removeEventListener("keydown", closeModalEsc);
//       },
//     }
//   );

//   instance.show();

//   function closeModalEsc(event) {
//     if (event.code !== "Escape") return;
//     instance.close();
//   }
// }