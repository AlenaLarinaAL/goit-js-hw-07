import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
        `
    }).join('');
}

const instance = basicLightbox.create(`<img src="" width="1280">`, {
    onShow: instance => window.addEventListener('keydown', onKeyPress),
    onClose: instance => window.removeEventListener('keydown', onKeyPress),
});



galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();
    if (!event.target.dataset.source) {
        return;
    } else {
        const element = instance.element().querySelector('img');
        element.src = event.target.dataset.source;
        instance.show();
    }
}

function onKeyPress(event) {
    if (event.code !== "Escape") {
        return;
    } else {
        instance.close();
    }
}

console.log(createGalleryCardsMarkup(galleryItems));