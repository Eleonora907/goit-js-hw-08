import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

let galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
      </a>
    </li>`;
  })
  .join('');

galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
