// Static values in °C and km/h
const temperature = 8;
const windSpeed = 10;

// Function to calculate the wind child factor
function calculatewindChill(temp, speed) {

    // Wind child formula in Celcius
    let windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
    return windChill.toFixed(1);
}

function displayWindChill() {
    
    let windChill;

    // Check if the conditions for the calculation are met
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculatewindChill(temperature, windSpeed);
    } else {
        windChill = "N/A"
    }

    // Display the result
    const windChillElement = document.getElementById("windchill");
    windChillElement.textContent = `${windChill} °C`;
}

window.onload = displayWindChill;