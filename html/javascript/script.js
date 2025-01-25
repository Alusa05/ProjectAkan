document.getElementById("akan-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect user input
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Validation of input
    if (day <= 0 || day > 31 || month <= 0 || month > 12 || isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Invalid date or month");
        return;
    }

    // Calculation of the day of the week
    const century = Math.floor(year / 100);
    const yearDigits = year % 100;
    const dayOfWeek = Math.floor(
        ( (century / 4) - 2 * century - 1 + (5 * yearDigits / 4) + (26 * (month + 1) / 10) + day ) % 7
    );

    // Akan names
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

    // Display the Akan name
    document.getElementById("result").innerText = `Your Akan name is ${akanName}`;
});