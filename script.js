const sliderContainer = document.querySelector('.slider-container');
const SlideRight = document.querySelector('.right-slide');
const SlideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slides = SlideRight.querySelectorAll('div');
const sliderHeight = sliderContainer.clientHeight;

let activeSlideIndex = 0;

// Set initial position of the left slide
SlideLeft.style.top = `-${activeSlideIndex * sliderHeight}px`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex >= slides.length) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slides.length - 1;
        }
    }

    // Adjust position of left slide
    SlideLeft.style.top = `-${activeSlideIndex * sliderHeight}px`;

    // Adjust position of right slide
    SlideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
}
// Image URLs
const imageUrls = [
    'https://source.unsplash.com/pink-cherry-blossom-flower-_SbeCWYjwCQ',
    'https://source.unsplash.com/rock-mountain-under-blue-sky-PbYmrJe9bRw',
    'https://source.unsplash.com/neuschwanstein-castle-germany-Y7BG6yO9Q9o',
    'https://source.unsplash.com/eagle-hanging-under-sunset-XFkkYwKiC_U'
];

// Preload images
function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Call preloadImages function with your image URLs
preloadImages(imageUrls);
