// Hmaburguer Menu
const hamButton = document.getElementById("hamb-menu");
const navigation = document.querySelector(".navigation")

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// BMI
document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculate-btn");
    const resultDisplay = document.getElementById("result");

    calculateBtn.addEventListener("click", function() {
        // Getting inputs values
        const weight = parseFloat(document.getElementById("weight").value);
        const heightInput = document.getElementById("height").value;
        const height = parseFloat(document.getElementById("height").value);

        // Validate values NaN (is not a number)
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultDisplay.textContent = "Please enter valid numbers";
            return;
        }

        // Check if height is decimal
        if (!heightInput.includes(".")) {
            resultDisplay.textContent = "Error: Please introduce height in decimals (e.x: 1.80)";
            return;
        }

        // Calculate BMI
        const bmi = (weight / (height * height)).toFixed(2);

        resultDisplay.textContent = `Your BMI is: ${bmi}`;

        // BMI Category
        let category = "";
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }
        resultDisplay.textContent += ` (${category})`;

    });

});

// Subscribe discount

// Select elements in the DOM
const subscribeButton = document.querySelector('.footer-btn');
const emailInput = document.querySelector('.email-discount');

// Handle the subscription function
function handleSubscription() {
    const email = emailInput.value.trim();

    // Validate email
    if (!validateEmail(email)) {
        alert('Please introduce a valid email direction');
        return;
    }

    // Get saved emails in the storage
    const storedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];

    // Find out if the email is already registered
    if (storedEmails.includes(email)) {
        alert('This email direction is already registered');
    } else {
        // Add new email to the list and and save it into the storage
        storedEmails.push(email);
        localStorage.setItem('subscribedEmails', JSON.stringify(storedEmails));
        alert('You have successfully registered. Welcome to our newsletter!');
    }

    // Clean input field
    emailInput.value = '';
}

// Function to validate the email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Add an event listener to the subscription button
subscribeButton.addEventListener('click', handleSubscription);


// FAQ's
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const faqAnswer = button.nextElementSibling;

            // Alternar la visibilidad de la respuesta
            if (faqAnswer.style.display === 'block') {
                faqAnswer.style.display = 'none';
                button.textContent = '+'; // Cambiar el texto del botón a "+"
            } else {
                faqAnswer.style.display = 'block';
                button.textContent = '-'; // Cambiar el texto del botón a "-"
            }
        });
    });
});

// Contact

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        if (emailValue) {
            alert(`Thanks for your message! ${nameValue}`);
            emailInput.value = "";
            nameInput.value = "";
            messageInput.value = "";
        } else {
            alert("Please enter a valid email");
        }
    });
});
