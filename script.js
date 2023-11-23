

const sliderContainer = document.querySelector('.slider-container');
const rightSlide = document.querySelector('.slide-right');
const leftSlide = document.querySelector('.slide-left');
const upButton = document.querySelector('.button-up');
const downButton = document.querySelector('.button-down');

// Number of images
const slidesLenght = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLenght - 4) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    // Get slider height
    const sliderHeight = sliderContainer.clientHeight;
    
    // Scroll UP
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLenght - 1){
            activeSlideIndex = 0;
        }
    }

    // Scroll DOWN
    if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLenght - 1;
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
}












