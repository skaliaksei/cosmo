window.addEventListener('DOMContentLoaded', () => {
    const leftDigit = document.querySelector('.left-digit');
    const rightDigit = document.querySelector('.right-digit');
  
    const finalValue = 2466;
    const startValue = 10;
    const duration = 2300;
  
    let startTime = null;
  
    function animate(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
  
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(startValue + (finalValue - startValue) * progress);
  
      // Делим число: левая часть — всё кроме последних двух цифр
      const left = Math.floor(currentValue / 100);
      const right = currentValue % 100;
  
      leftDigit.textContent = left > 0 ? left : '';  // если 0 — не показываем ничего
      rightDigit.textContent = right;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
  
    // Начальное отображение
    leftDigit.textContent = '';
    rightDigit.textContent = startValue;
  
    requestAnimationFrame(animate);
});
  