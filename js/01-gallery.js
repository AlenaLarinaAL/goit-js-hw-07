import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const key = 'Escape';

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
};

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== ('IMG')) {
        return;
    }

    const originalUrl = event.target.dataset.source;
    // console.log(originalUrl);
    const instance = createLightboxInstance(originalUrl);
    instance.show();
    closeInstanceByKey(instance, key)

};


function createLightboxInstance(URL) {
    return basicLightbox.create(`<img src="${URL}" width="1280" height="auto">`);
};

function closeInstanceByKey(instance, key) {

    if (instance.visible()) {
        window.addEventListener('keydown', event => {
            if (event.code === key) {
                instance.close();
                window.removeEventListener('keydown', event);
            };
        });
    };
};

