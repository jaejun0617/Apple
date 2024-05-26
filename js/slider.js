const slider = document.getElementById('videoSlider');
const sliderItems = document.querySelectorAll('.video__1');
let isPaused = false;

let scrollAmount = 0;
const slideWidth = sliderItems[0].offsetWidth;
const pixelsPerFrame = 2;

slider.addEventListener('mouseover', () => {
    isPaused = true;
});

slider.addEventListener('mouseout', () => {
    isPaused = false;
    requestAnimationFrame(slide);
});

function slide() {
    if (!isPaused) {
        scrollAmount += pixelsPerFrame;
        if (scrollAmount >= slideWidth) {
            const firstChild = slider.firstElementChild;
            slider.appendChild(firstChild);
            scrollAmount = 0;
        }
        slider.scrollLeft = scrollAmount;

        requestAnimationFrame(slide);
    }
}

requestAnimationFrame(slide);
