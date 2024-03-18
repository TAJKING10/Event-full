document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const timeSelect = document.querySelector('select[name="time"]');
    const placeSelect = document.querySelector('select[name="place"]');
    const eventContainers = document.querySelectorAll('.container');

    function filterEvents() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedTime = timeSelect.value.toLowerCase();
        const selectedPlace = placeSelect.value.toLowerCase();

        eventContainers.forEach(function (container) {
            const eventName = container.querySelector('h2').textContent.toLowerCase();
            const eventPlace = container.querySelector('h3').textContent.toLowerCase();
            const eventTimeText = container.querySelector('.right-text').textContent.toLowerCase();
            const eventCategory = container.querySelector('h4').textContent.toLowerCase();

            // Check if the last two letters of the time string are "AM" or "PM"
            const isMorning = eventTimeText.endsWith('am');
            const isEvening = eventTimeText.endsWith('pm') && parseInt(eventTimeText) >= 8;
            const isAfternoon = !isMorning && !isEvening;

            let timeCategory = '';

            if (isMorning) {
                timeCategory = 'morning';
            } else if (isAfternoon) {
                timeCategory = 'afternoon';
            } else if (isEvening) {
                timeCategory = 'evening';
            }

            const showEvent = eventName.includes(searchTerm) &&
                             (selectedTime === '' || timeCategory === selectedTime) &&
                             (selectedPlace === '' || eventPlace.includes(selectedPlace) || eventCategory.includes(selectedPlace));

            container.style.display = showEvent ? 'block' : 'none';
        });
    }

    searchInput.addEventListener('input', filterEvents);
    timeSelect.addEventListener('change', filterEvents);
    placeSelect.addEventListener('change', filterEvents);

    // Initial filtering when the page loads
    filterEvents();
});