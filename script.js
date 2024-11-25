// Initialize the current index to the first image
let currentIndex = 0;

// Function to move the carousel left (-1) or right (+1)
function moveCarousel(direction) {
    // Get the carousel container and all images
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Update the current index based on the direction
    currentIndex += direction;

    // Loop back to the end if moving left from the first image
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }

    // Loop back to the start if moving right from the last image
    if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Calculate the transform value to show the current image
    const translateX = -currentIndex * 100; // Each image takes up 100% width
    carouselContainer.style.transform = `translateX(${translateX}%)`;
}

// Optional: Add keyboard navigation (left and right arrow keys)
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        moveCarousel(-1); // Move left
    } else if (event.key === 'ArrowRight') {
        moveCarousel(1); // Move right
    }
});
