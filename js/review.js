document.addEventListener("DOMContentLoaded", function () { 
    // Get stored count or initialize it
    let count = localStorage.getItem("reviewCount") || 0;

    // Increment count
    count++;
    localStorage.setItem("reviewCount", count);

    // Update display
    document.getElementById("reviewCount").textContent = count;

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
});

