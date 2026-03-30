// Select the elements from the HTML
const countDisplay = document.getElementById('count-value');
const clickButton = document.getElementById('click-btn');
const resetButton = document.getElementById('reset-btn');

// Initial state
let count = 0;

// Add behavior to the "Click Me" button
clickButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

// Add behavior to the "Reset" button
resetButton.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});