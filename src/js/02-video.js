// Ініціалізація Vimeo плеєра
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// Ключ локального сховища
const STORAGE_KEY = 'videoplayer-current-time';

// Відстежувення події timeupdate - оновлення часу відтворення
// Оновлення часу у сховищі не частіше, ніж раз на секунду
player.on('timeupdate', throttle(setPlaybackTime, 1000));

// Зберігання часу відтворення у локальне сховище
function setPlaybackTime({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

// Отримання часу відтворення
const playbackTime = localStorage.getItem(STORAGE_KEY);

// відновлення відтворення зі збереженої позиції після перезавантаження сторінки
player.setCurrentTime(playbackTime);
