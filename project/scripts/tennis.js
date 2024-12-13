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



document.addEventListener('DOMContentLoaded', () => {
    const hambutton = document.getElementById('hambutton');
    const closebutton = document.getElementById('closebutton');
    const navOverlay = document.getElementById('navOverlay');

    hambutton.addEventListener('click', () => {
        navOverlay.classList.toggle('show');
    });

    closebutton.addEventListener('click', () => {
        navOverlay.classList.toggle('show');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navOverlay.classList.remove('show');
        });
    });
});




// JavaScript to dynamically add options

const products = ["I don't know", "2.5", "3.0-3.5", "3.5-4.0", "4.0-4.5", "4.5-5.0", "5.0-5.5", "6.0 +"];

window.addEventListener('DOMContentLoaded', (event) => {
    const select = document.getElementById('product');
    products.forEach(product => {
        let option = document.createElement('option');
        option.value = product; // Use the string directly as the value
        option.textContent = product; // Use the string directly as the display text
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
