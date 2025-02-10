document.addEventListener("DOMContentLoaded", function () {
    // Product Array
    const products = [
        { id: "p1", name: "Smartphone X" },
        { id: "p2", name: "Laptop Pro" },
        { id: "p3", name: "Wireless Earbuds" },
        { id: "p4", name: "Smartwatch 2.0" },
    ];

    // Populate Product Dropdown
    const productSelect = document.getElementById("product");

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
