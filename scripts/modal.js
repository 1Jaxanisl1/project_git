// Получаем элементы карточек и модального окна
const cards = document.querySelectorAll('.item');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const closeModal = document.getElementsByClassName("close")[0];



// Функция для открытия модального окна
function openModal(title) {
  modalTitle.textContent = title; // Устанавливаем текст заголовка
  modal.style.display = 'block'; // Отображаем модальное окно
  toggleBodyScroll(true);
}

// Обработчик события для каждой карточки
cards.forEach(item => {
  item.addEventListener('click', () => {
    const title = item.getAttribute('data-title'); // Получаем заголовок из атрибута
    openModal(title); // Открываем модальное окно с заголовком
  });
});

// Обработчик события для закрытия модального окна
closeModal.onclick = function () {
  modal.style.display = "none";
  toggleBodyScroll(false);
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    toggleBodyScroll(false);
  }
}



function toggleBodyScroll(lock) {
  document.body.style.overflow = lock ? 'hidden' : '';
}
