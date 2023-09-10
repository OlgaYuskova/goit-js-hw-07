import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

list.insertAdjacentHTML("beforeend", createMarkupList(galleryItems));
list.addEventListener('click', handleClick);

function createMarkupList(arr) {
    return arr.map(({ preview, description, original }) => `
    <li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
     />
     </a>
    </li>
    `).join(' ');
};

function handleClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    };
    
    const clickedImageSource = event.target.dataset.source;
    const galleryItem = galleryItems.find(({ original }) => original === clickedImageSource);
    console.log(galleryItem);

    if (galleryItem) {
        const instance = basicLightbox.create(`
            <div>
            <img src="${galleryItem.original}" alt="${galleryItem.description}" />
            </div>
        `);

        instance.show();

        instance.element().addEventListener('click', () => {
        instance.close();
        });

    };
};

