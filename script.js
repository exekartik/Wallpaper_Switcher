const boxes = document.querySelectorAll('.box'); // Get all boxes
const body = document.querySelector('body');

boxes.forEach((box) => {
    box.addEventListener('click', function () {
        // Get the background image of the clicked box
        const backgroundImage = getComputedStyle(box).backgroundImage;

        // Set the body's background image and prevent repeating
        body.style.backgroundImage = backgroundImage;
        body.style.backgroundSize = 'cover'; // Ensure the image covers the entire body
        body.style.backgroundPosition = 'center'; // Center the background image
        body.style.backgroundRepeat = 'no-repeat'; // Prevent the background from repeating
    });
});
