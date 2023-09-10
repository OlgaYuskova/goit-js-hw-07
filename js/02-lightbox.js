
import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

list.insertAdjacentHTML('beforeend', createMarkupList(galleryItems));

list.addEventListener('click', handleClick);

function createMarkupList(arr) {
  return arr.map(({ preview, description, original }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `)
    .join(' ');
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function handleClick(event) {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
  };
};
console.log(galleryItems);
