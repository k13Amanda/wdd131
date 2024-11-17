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


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Layton Utah",
        location: "Layton, Utah, United States",
        dedicated: "2024, June, 16",
        area: 514008,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/layton-utah-temple/layton-utah-temple-47164.jpg"
      },
      {
        templeName: "Anchorage Alaska Temple",
        location: "Anchorage Alaska , United States",
        dedicated: "1999, January, 9-10",
        area: 235224,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-15260.jpg"
      },
      {
        templeName: "Buenos Aires Argentina Temple",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17-19",
        area: 162478.8,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087.jpg"
      },
  ];



// Get the container where temple cards will be inserted
const templeContainer = document.getElementById('temple-container');

// Loop through each temple and create a card
temples.forEach((temple) => {
    // Create a div element for the card
    const card = document.createElement('div');
    card.classList.add('temple-card');

    // Create elements for each piece of information
    const nameElement = document.createElement('h3');
    nameElement.textContent = temple.templeName;

    const locationElement = document.createElement('p');
    locationElement.textContent = `Location: ${temple.location}`;

    const dedicatedElement = document.createElement('p');
    dedicatedElement.textContent = `Dedicated: ${temple.dedicated}`;

    const areaElement = document.createElement('p');
    areaElement.textContent = `Area: ${temple.area} sq ft`;

    const imageElement = document.createElement('img');
    imageElement.src = temple.imageUrl;
    imageElement.alt = temple.templeName;
    imageElement.loading = 'lazy'; // Use native lazy loading

    // Add a load event listener to add the 'loaded' class when the image has fully loaded
    imageElement.addEventListener('load', () => {
        imageElement.classList.add('loaded');
    });

    // Append all elements to the card
    card.appendChild(nameElement);
    card.appendChild(locationElement);
    card.appendChild(dedicatedElement);
    card.appendChild(areaElement);
    card.appendChild(imageElement);
  

    // Append the card to the container
    templeContainer.appendChild(card);
});

