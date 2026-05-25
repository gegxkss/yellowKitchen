const specialitiesSlider = document.querySelector('.sliders');
const specPrevButton = document.querySelector('.prev-button2');
const specNextButton = document.querySelector('.next-button2');

if (specialitiesSlider && specPrevButton && specNextButton) {
    const specialitiesSlides = Array.from(specialitiesSlider.querySelectorAll('img'));
    const specSlideCount = specialitiesSlides.length;

    let specSlideIndex = 0;
    const specSlidesToShow = 4;

    specPrevButton.addEventListener('click', showSpecPrevious);
    specNextButton.addEventListener('click', showSpecNext);

    function showSpecPrevious() {
        if (specSlideCount <= specSlidesToShow) return;
        specSlideIndex = (specSlideIndex - 1 + (specSlideCount - specSlidesToShow + 1)) % (specSlideCount - specSlidesToShow + 1);
        updateSpecSlider();
    }

    function showSpecNext() {
        if (specSlideCount <= specSlidesToShow) return;
        specSlideIndex = (specSlideIndex + 1) % (specSlideCount - specSlidesToShow + 1);
        updateSpecSlider();
    }

    function updateSpecSlider() {
        const step = 100 / specSlidesToShow;
        specialitiesSlider.style.transform = `translateX(-${specSlideIndex * step}%)`;
    }

    updateSpecSlider();
}
