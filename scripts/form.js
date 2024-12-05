// Select the span with the id "currentyear"
const yearSpan = document.querySelector("#currentyear");
// Get the current date
const today = new Date();
// Extract the current year
const currentYear = today.getFullYear();
// Set the text content of the span to the current year
yearSpan.textContent = currentYear;

const dateSpan = document.querySelector("#lastModified");
const now = new Date();
const lastModified = document.lastModified
const formattedDate = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}/${now.getFullYear()}`;
const formattedTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
const formattedDateTime = `${formattedDate} ${formattedTime}`;

dateSpan.textContent = `Last Modified: ${formattedDateTime}`;




// JavaScript to dynamically add options

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

window.addEventListener('DOMContentLoaded', (event) => {
    const select = document.getElementById('product');
    products.forEach(product => {
        let option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
});


// Check if the counter exists in localStorage
if (!localStorage.getItem('reviewCounter')) {
    localStorage.setItem('reviewCounter', 0);
}

// Increment the counter when the page loads
window.addEventListener('DOMContentLoaded', (event) => {
    let counter = parseInt(localStorage.getItem('reviewCounter'), 10);
    counter += 1;
    localStorage.setItem('reviewCounter', counter);
    
    // Display the counter value on the page
    document.getElementById('review-count').textContent = `Reviews Completed: ${counter}`;
});


