
let currentIndex = 0;

function changeImage() {
    const images = ['events/event1.jpg', 'events/event2.webp', 'events/event3.jpeg']; // Add your image URLs here
    const imageElement = document.getElementById('image');
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the beginning if at the end
    imageElement.src = images[currentIndex];
}