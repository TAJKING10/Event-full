document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text');
    const leftButton = document.getElementById('leftButton');
    const rightButton = document.getElementById('rightButton');

    // Initial text and text options
    let currentIndex = 0;
    const texts = ["The recent music festival was an unforgettable experience! The lineup was incredible, featuring a diverse range of artists that catered to all musical tastes. The atmosphere was electric, with enthusiastic fans dancing and singing along to their favorite songs. ", "The organizers did a fantastic job ensuring smooth logistics and providing top-notch facilities. Overall, it was a weekend filled with great music, good vibes, and lasting memories. Can't wait for next year's event!", "Text 3"]; // Add your texts here

    textElement.textContent = texts[currentIndex];

    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + texts.length) % texts.length;
        textElement.textContent = texts[currentIndex];
    });

    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % texts.length;
        textElement.textContent = texts[currentIndex];
    });
});
