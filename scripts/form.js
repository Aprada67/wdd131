const products = [
    {
      id: "fc-1888",
      name: "Flux Capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power Laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Time Circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Low Voltage Reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp Equalizer",
      averagerating: 5.0
    }
];

const productSelect = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
})

const form = document.querySelector(".review-form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const selectedProduct = productSelect.options[productSelect.selectedIndex].textContent;
    const rating = document.querySelector('input[name="stars"]:checked').value;
    const reviewText = document.getElementById("review").value;

    // Store values in localStorage
    localStorage.setItem("review-product", selectedProduct);
    localStorage.setItem("review-rating", rating);
    localStorage.setItem("review-text", reviewText);
    
    // Redirige a la página de resumen (review.html)
    window.location.href = "review.html";
});