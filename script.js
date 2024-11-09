let currentIndex = 0;
const images = document.querySelectorAll(".carousel-container img");
const totalImages = images.length;

document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector(".carousel-container").style.transform = `translateX(${offset}%)`;
}
