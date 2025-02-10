document.addEventListener("DOMContentLoaded", function () {
    // Get stored count or initialize it
    let count = localStorage.getItem("reviewCount") || 0;

    // Increment count
    count++;
    localStorage.setItem("reviewCount", count);

    // Update display
    document.getElementById("reviewCount").textContent = count;
});
