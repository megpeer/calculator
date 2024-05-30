// let currentDisplay = "0"; 

function appendToDisplay(input) {
    const display = document.querySelector(".display")
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

console.log(operate(1, 2, '+'))
// clearDisplay()

// makeNegative()

// calculate()