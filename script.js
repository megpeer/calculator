
const buttons = document.querySelectorAll('input[type="button"');
const input = document.getElementById('display')

let num1 = '';
let num2 = '';
let operator = null;
let step = 0;
let displayCurrent = document.getElementById('num1')
let displayPrevious = document.getElementById('num2')
// let numArray = [];
// let numArray2 = [];
let result = 0;

function getNum(num) {
    if (step === 2) {
        clearDisplay();   
    }


    if (step === 0 ){
    displayCurrent.append(num);

    // num1 = Number(numArray.join(''));
    // input.value = num1;
    // console.log(num1, typeof(num1))
    // return num1;

    }
    else if (step === 1) {
    

    displayCurrent.append(num);



    }
}

function getOp(op) {
    if (step === 0){
    step = 1;
    operator = op;
    num1 = document.querySelector('#num1').innerText;
    displayPrevious.append(num1 + " " + operator);
    displayCurrent.innerHTML = "";
    
    // displayPrevious.append(" " + operator);

    // displayCurrent.append("");



    }
    else {
        return false;
    }
}


function operate(num1, num2, operator) {
    step = 0
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
else if (operator === "/") {
    result = num1 / num2;
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
    // numArray = [];
    // numArray2 = [];
    result = 0
}

function del() {
    displayCurrent.slice(0, -1);
}