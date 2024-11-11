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




// weather box

const temp = 45; 
const windSpeed = 5;

function calculateWindChill(temp, windSpeed) {
    return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16));
}

function displayWindChill() {
    if (temp <= 50 && windSpeed > 3) {
        const windChill = calculateWindChill(temp, windSpeed);
        document.getElementById('wind-chill').textContent = `Wind Chill: ${windChill} °F`;
    } else {
        document.getElementById('wind-chill').textContent = 'Wind Chill: N/A';
    }
}

// Call the displayWindChill function when the page loads or when appropriate
window.onload = displayWindChill;


