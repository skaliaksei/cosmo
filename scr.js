window.addEventListener('DOMContentLoaded', () => {
  const first = document.querySelector('.head-1');
  const second = document.querySelector('.head-2');

  // Ждём 10 секунд, потом переключаем фоны
  setTimeout(() => {
    first.style.opacity = '0';   // затухание первой
    second.style.opacity = '1';  // появление второй
  }, 3000); // 10 секунд
});
