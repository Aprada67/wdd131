function displayReviewDetails() {
    const product = localStorage.getItem("review-product");
    const rating = localStorage.getItem("review-rating");
    const text = localStorage.getItem("review-text");

    document.getElementById("review-product").textContent = product || "N/A";
    document.getElementById("review-rating").textContent = rating || "N/A";
    document.getElementById("review-text").textContent = text || "No review provided."

    // Review counter logic
    let reviewCount = localStorage.getItem("review-count");

    if (reviewCount == null) {
        reviewCount = 1;
    } else {
        reviewCount = parseInt(reviewCount) + 1;
    }

    // Save the updated count
    localStorage.setItem("review-count", reviewCount);
    document.getElementById("review-count").textContent = `You've submitted ${reviewCount} reviews.`;
}

document.addEventListener("DOMContentLoaded", displayReviewDetails);