let position = 0;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slideContainer = document.getElementsByClassName('slider-container')[0];

setOpacity();

nextBtn.addEventListener('click', () => {
    if (position > -4800) {
        position -= 1200;
        slideContainer.style.transform = `translateX(${position}px)`;

        setOpacity();
    }
});


prevBtn.addEventListener('click', () => {
    if (position < 0) {
        position += 1200;
        slideContainer.style.transform = `translateX(${position}px)`;

        setOpacity();
    }
});


function setOpacity() {
    position == 0 ? prevBtn.style.opacity = '0.3' : prevBtn.style.opacity = '1.0';
    position == -4800 ? nextBtn.style.opacity = '0.3' : nextBtn.style.opacity = '1.0';
}
