const display = document.querySelector(".display")
const display2 = document.querySelector(".display2")
const operator = document.querySelector(".operator")

function appendToDisplay(input) {
    display.textContent += input;
}


function operate(num1, num2, operator) {
if (operator = "+") {
    return num1 + num2
}
if (operator = "-") {
    return num1 - num2
}
if (operator = "x") {
    return num1 * num2
}
else num1 / num2
}

function clearDisplay() {
    display.textContent = "";
}