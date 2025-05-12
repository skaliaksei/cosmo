// Рамка с треугольником вокруг активного элемента
import { htmlCode } from './html.js'

const elements = document.getElementsByClassName('top-slider__container-item');

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseenter', function () {
        this.insertAdjacentHTML('beforeend', htmlCode);
    });

    elements[i].addEventListener('mouseleave', function () {

        Array.from(this.children).forEach(child => {
            if (child.tagName !== 'H3') {
                this.removeChild(child);
            }
        });        

    });
}
