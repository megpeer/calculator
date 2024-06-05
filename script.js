
const buttons = document.querySelectorAll('input[type="button"');
const input = document.getElementById('display')
let num1 = '';
let num2 = '';
let operator = null;
let step = 0;
let displayCurrent = document.getElementById('num1')
let displayPrevious = document.getElementById('num2')
let result = 0;

function getNum(num) {
    if (step === 2) {
        false;   
    }

    if (step === 0 ){
    displayCurrent.append(num);

    }
    else if (step === 1) {
    
    displayCurrent.append(num);

    }
}

function decimalPressed() {
        if (!displayCurrent.innerHTML.includes('.')) {
            displayCurrent.append('.')
        }
}


function getOp(op) {
    step = 1;
    operator = op;
    num1 = document.querySelector('#num1').innerText;
    displayPrevious.append(num1 + " " + operator);
    displayCurrent.innerHTML = "";

}


function operate(num1, num2, operator) {
    step = 2
    num1 = parseFloat(document.querySelector('#num1').innerText);
    num2 = parseFloat(document.querySelector('#num2').innerText);
    displayCurrent.innerHTML = "";
    displayPrevious.innerHTML = "";

if (operator === "+") {
    result = num1 + num2;
    displayCurrent.append(result);
    
}
if (operator ==="-") {
    result = num1 - num2;
    displayCurrent.append(result);
}
if (operator === "*") {
    result = num1 * num2;
    displayCurrent.append(result);
}
else if (operator === "/" && num1 != 0) {
    result = num2 / num1;
    displayCurrent.append(result);
}
else if (operator === "/" && num1 == 0) {
    result = "MAAAAAAAAAAAAATH!!";
    displayCurrent.append(result);
}
}



function clearDisplay() {
 
    displayCurrent.innerHTML = "";
    displayPrevious.innerHTML = "";

    num1 = null;
    num2 = null;
    operator = null;
    step = 0;
    result = 0
}

function del() {
    displayCurrent.innerHTML = "";
}


// to do:
// max char 10?
// keyboard support