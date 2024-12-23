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



// hambuger Button js

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




