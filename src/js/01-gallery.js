// Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryListRef = document.querySelector('.gallery');

galleryListRef.innerHTML = createGalleryListMarkUp(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

function createGalleryListMarkUp(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
    })
    .join('');
}

// Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery

const lightboxSettings = new SimpleLightbox('.gallery a', {
  // Додаванная відображення підписів до зображень з атрибута alt.
  // Налаштування щоб підпис був знизу і з'являвся через 250 мілісекунд після відкриття зображення.
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
