import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulEl = document.querySelector(".gallery");

const imgEl = galleryItems.map(({preview,original,description }) => 
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-caption="${description}" alt="${description}" />
   </a>
</li>`
).join("");

ulEl.insertAdjacentHTML("beforeend", imgEl);

ulEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  

  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
     });
  
});