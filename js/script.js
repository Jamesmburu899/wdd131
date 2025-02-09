// Product Array
const products = [
    { id: "p1", name: "Smartphone" },
    { id: "p2", name: "Laptop" },
    { id: "p3", name: "Headphones" },
    { id: "p4", name: "Smartwatch" }
];

// Populate Product Dropdown
const productSelect = document.getElementById("product");

products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Local Storage Counter for Reviews
if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    alert(`You have submitted ${reviewCount} reviews.`);
}

// Footer Content
const footerContent = document.getElementById("footer-content");

function getLastModifiedDate() {
    let lastModified = new Date(document.lastModified);
    return lastModified.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    }) + " " + lastModified.toLocaleTimeString("en-US");
}

// Update Footer
footerContent.innerHTML = `
    © 2025 Temple Album. All Rights Reserved.<br>
    Last Modified: ${getLastModifiedDate()}<br>
    Nairobi, Kenya - James Mburu Maina
`;