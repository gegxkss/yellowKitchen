const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;

let slideIndex = 0;
const slidesToShow = 4;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    if (slideCount <= slidesToShow) return;
    slideIndex = (slideIndex - 1 + (slideCount - slidesToShow + 1)) % (slideCount - slidesToShow + 1);
    updateSlider();
}

function showNextSlide() {
    if (slideCount <= slidesToShow) return;
    slideIndex = (slideIndex + 1) % (slideCount - slidesToShow + 1);
    updateSlider();
}

function updateSlider() {
    const step = 100 / slidesToShow;
    slider.style.transform = `translateX(-${slideIndex * step}%)`;
}

updateSlider();
