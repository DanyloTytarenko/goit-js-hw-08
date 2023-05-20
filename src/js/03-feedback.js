import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', throttle(handleInput, 500));
feedbackForm.addEventListener('submit', handleSubmit);

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
checkingStorageData();

// Збереження поточних значення полів форми в локальному сховищі
function handleInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Перевірка стану сховища та заповнення полів форми даними зі сховища
function checkingStorageData() {
  const storageData = localStorage.getItem(STORAGE_KEY);

  if (storageData) {
    const storageDataArr = JSON.parse(storageData);

    Object.keys(storageDataArr).forEach(name => {
      formData[name] = storageDataArr[name];
      feedbackForm.elements[name].value = storageDataArr[name];
    });
  }
}

// Очищення форми під час сабміту, а також вивід в косоль обєкту з їхніми поточними значеннями
function handleSubmit(event) {
  event.preventDefault();

  if (!(feedbackForm.email.value && feedbackForm.message.value)) {
    alert('Please, fill all fields');
    return;
  }

  console.log(formData);
  feedbackForm.reset();
  localStorage.removeItem(STORAGE_KEY);
}
