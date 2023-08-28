const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputDiv = document.querySelector("#output-div");

function checkBirthdateIsLucky(){
    var DOB = dateOfBirth.value;
    var sum = calculateSum(DOB);
    if(luckyNumber.value !== "" && DOB !== ""){
    outputDiv.innerText = comparison(sum, luckyNumber.value);
}
else{
    outputDiv.innerText = "Please enter both your birthdate and a lucky number 😡";
}

}

function comparison(sum, luckyNumber){
    if(sum % luckyNumber == 0){
        return ("Your birthday is lucky 🥳");
    }
    else {
        return ("Your birthday is not so lucky 😔");
    }
}

function calculateSum(DOB){
    DOB = DOB.replace(/\D/g, ""); // Remove all non-numeric characters
    var sum = 0;
    for(let i = 0; i < DOB.length; i++){
        sum += Number(DOB.charAt(i));
    }
    return sum;
}



checkButton.addEventListener("click", checkBirthdateIsLucky);
