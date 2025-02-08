// Array of Temple Objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Additional Temples
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 40000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/800x500/rome-italy-temple-exterior-2152747-wallpaper.jpg"
    },
    {
      templeName: "Paris France",
      location: "Paris, France",
      dedicated: "2017, May, 21",
      area: 44000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/800x500/paris-france-temple-exterior-2152748-wallpaper.jpg"
    },
    {
      templeName: "São Paulo Brazil",
      location: "São Paulo, Brazil",
      dedicated: "1978, October, 30",
      area: 59000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/800x500/sao-paulo-brazil-temple-exterior-2152749-wallpaper.jpg"
    }
  ];
  
  // DOM Elements
  const templeContainer = document.getElementById("temple-container");
  
  // Function to Create a Temple Card
  function createTempleCard(temple) {
    const card = document.createElement("div");
    card.classList.add("temple-card");
  
    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy"; // Enable lazy loading
  
    const name = document.createElement("h2");
    name.textContent = temple.templeName;
  
    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;
  
    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
  
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
  
    return card;
  }
  
  // Function to Display Temples
  function displayTemples(temples) {
    templeContainer.innerHTML = ""; // Clear existing content
    temples.forEach(temple => {
      const card = createTempleCard(temple);
      templeContainer.appendChild(card);
    });
  }
  
  // Filter Temples
  function filterTemples(filter) {
    let filteredTemples = [];
    switch (filter) {
      case "old":
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        break;
      case "new":
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        break;
      case "large":
        filteredTemples = temples.filter(temple => temple.area > 90000);
        break;
      case "small":
        filteredTemples = temples.filter(temple => temple.area < 10000);
        break;
      case "home":
        filteredTemples = temples;
        break;
      default:
        filteredTemples = temples;
    }
    displayTemples(filteredTemples);
  }
  
  // Event Listeners for Navigation
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = link.getAttribute("data-filter");
      filterTemples(filter);
    });
  });
  
  // Initial Display of All Temples
  displayTemples(temples);
  
  // Footer Year and Last Modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;