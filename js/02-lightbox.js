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
  
  // console.log("event.target: ", event.target);
  // console.log("event.currentTarget: ", event.currentTarget);

 // import * as basicLightbox from 'basiclightbox'
    //new SimpleLightbox('.some-element a', { /* options */ });
  console.log(event.target.dataset.caption);
  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
     });
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });

  // document.addEventListener("keydown", event => {
  //   if (event.code === "Escape") 
  // console.log("key: ", event.key);
  // console.log("code: ", event.code);
//});
  
});