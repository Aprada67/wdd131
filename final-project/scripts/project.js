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