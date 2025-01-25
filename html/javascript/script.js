document.getElementById("akan-form").addEventListener("submit", function(event){
 event.preventDefault();
}

//Collect user input
const day = parseInt(document.getElementById("day").value);
const month = parseInt(document.getElementById("month").value);
const year = parseInt(document.getElementById("year").value);
const gender = document.querySelector('input[name="gender"]:checked').value;

//Validation of input
if (day <=0 || day > 31 || month <=0 || month > 12){
  alert("");
}