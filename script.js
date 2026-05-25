const restaurantSlider = document.querySelector('.slider');
const restPrevButton = document.querySelector('.prev-button');
const restNextButton = document.querySelector('.next-button');

if (restaurantSlider && restPrevButton && restNextButton) {
    const restaurantSlides = Array.from(restaurantSlider.querySelectorAll('img'));
    const restSlideCount = restaurantSlides.length;

    let restSlideIndex = 0;
    const restSlidesToShow = 4;

    restPrevButton.addEventListener('click', showRestPrevious);
    restNextButton.addEventListener('click', showRestNext);

    function showRestPrevious() {
        if (restSlideCount <= restSlidesToShow) return;
        restSlideIndex = (restSlideIndex - 1 + (restSlideCount - restSlidesToShow + 1)) % (restSlideCount - restSlidesToShow + 1);
        updateRestSlider();
    }

    function showRestNext() {
        if (restSlideCount <= restSlidesToShow) return;
        restSlideIndex = (restSlideIndex + 1) % (restSlideCount - restSlidesToShow + 1);
        updateRestSlider();
    }

    function updateRestSlider() {
        const step = 100 / restSlidesToShow;
        restaurantSlider.style.transform = `translateX(-${restSlideIndex * step}%)`;
    }

    updateRestSlider();
}
