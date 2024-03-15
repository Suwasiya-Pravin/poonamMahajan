const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const content = document.querySelector('.carousel-content');

let currentIndex = 0;

function updateContent(index) {
    const currentItem = carouselItems[index];
    const imgAlt = currentItem.querySelector('img').getAttribute('alt');
    // content.querySelector('h2').textContent = imgAlt;
    // You can add logic to update paragraph content here if needed
}

function showSlide(index) {
    if (index < 0 || index >= carouselItems.length) return;
    carousel.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
    updateContent(currentIndex);
}

// Update content for the initial slide
updateContent(currentIndex);

setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}, 5000); // Change slide every 5 seconds

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
}