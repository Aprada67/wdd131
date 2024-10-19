// Get Actual Year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = `© ${currentYear}`;

// Get Last modified
const lastModifiedDate = new Date(document.lastModified);
const options = {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false};
const formattedDate = lastModifiedDate.toLocaleString("en-US", options);

document.getElementById("lastmodified").textContent = `Last modification: ${formattedDate}`;