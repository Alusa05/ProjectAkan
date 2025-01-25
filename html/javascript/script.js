// Function to calculate the day of the week
function calculateDayOfWeek(century, year, month, day) {
    let d = Math.floor(((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
    return (d + 7) % 7; // Ensure non-negative result
}

// Function to get the Akan name based on day of the week and gender
function getAkanName(dayOfWeek, gender) {
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (gender === "male") {
        return maleNames[dayOfWeek];
    } else if (gender === "female") {
        return femaleNames[dayOfWeek];
    } else {
        return "Invalid gender selected.";
    }
}

// Attach event listener to the form
document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input
    const birthDate = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;

    // Validate input
    if (!birthDate || !gender) {
        alert("Please enter a valid date and select a gender.");
        return;
    }

    const [year, month, day] = birthDate.split("-").map(Number);

    if (day <= 0 || day > 31 || month <= 0 || month > 12) {
        alert("Please enter a valid date.");
        return;
    }

    const century = Math.floor(year / 100);
    const yearDigits = year % 100;

    // Calculate day of the week
    const dayOfWeek = calculateDayOfWeek(century, yearDigits, month, day);

    // Get Akan name
    const akanName = getAkanName(dayOfWeek, gender);

   // Redirect to result page with query parameters
   window.location.href = `result.html?akanName=${akanName}&gender=${gender}`;
});