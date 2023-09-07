import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulEl = document.querySelector(".gallery");

const imgEl = galleryItems.map(({preview,original,description }) => 
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      
    />
  </a>
</li>
`
).join("");

ulEl.insertAdjacentHTML("beforeend", imgEl);

// galleryItems.forEach(element => {
//     const imgEl = document.createElement("img");
//     imgEl.classList.add("gallery__image");
//     imgEl.src = element.preview;
//     imgEl.alt = element.description;
//     imgEl.setAttribute("data-source", element.original)
   
//     const hrefImg = document.createElement("a");
//     hrefImg.classList.add("gallery__link");
//     hrefImg.href = element.original;

//     const liItem = document.createElement("li");
//     liItem.classList.add("gallery__item");

//     ulEl.append(liItem);
//     liItem.append(hrefImg);
//     hrefImg.append(imgEl);
// });

ulEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600" 
    >
`)
  instance.show();

  // document.addEventListener("keydown", event => {
  //   if (event.code === "Escape") 
  // console.log("key: ", event.key);
  // console.log("code: ", event.code);
//});
  
});


