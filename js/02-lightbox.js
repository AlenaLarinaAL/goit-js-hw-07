import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a>
        </li>
      `;
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    close: true,
    nav: true,
    captionDelay: 250,
    captionsData: 'alt',
    animationSpeed: 240,
});