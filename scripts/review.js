function displayReviewDetails() {
    const product = localStorage.getItem("review-product");
    const rating = localStorage.getItem("review-rating");
    const text = localStorage.getItem("review-text");

    document.getElementById("review-product").textContent = product || "N/A";
    document.getElementById("review-rating").textContent = rating || "N/A";
    document.getElementById("review-text").textContent = text || "No review provided."

    // Review counter logic
    let reviewCount = parseInt(localStorage.getItem("review-count")) || 0;

    reviewCount += 1;

    // Save the updated count
    localStorage.setItem("review-count", reviewCount);
    document.getElementById("review-count").textContent = `Total reviews ${reviewCount}`;
}

document.addEventListener("DOMContentLoaded", displayReviewDetails);