// Get current year for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Get last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Static weather values (for now)
const temperature = 25; // °C
const windSpeed = 12;   // km/h

/**
 * Calculate wind chill factor using the metric formula
 * @param {number} temp - Temperature in Celsius
 * @param {number} speed - Wind speed in km/h
 * @returns {number|string} Wind chill in Celsius or 'N/A' if conditions not met
 */
function calculateWindChill(temp, speed) {
    // Check if conditions are met for wind chill calculation
    if (temp <= 10 && speed > 4.8) {
        // Wind chill formula for Celsius
        // Source: Environment and Climate Change Canada
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }
    return 'N/A';
}

// Calculate and display wind chill
const windChill = calculateWindChill(temperature, windSpeed);
const windChillDisplay = typeof windChill === 'number' ? windChill.toFixed(1) + '°C' : windChill;
document.getElementById('windchill').textContent = windChillDisplay;

// Display current temperature and wind speed
document.getElementById('temperature').textContent = `${temperature}°C`;
document.getElementById('wind').textContent = `${windSpeed} km/h`;