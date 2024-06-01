
const buttons = document.querySelectorAll('input[type="button"');

const input = document.getElementById('display')



  //1. get 1st number
  //2. get operator
  //3. get 2nd number
  //4. calculate result
  //5. reset display

  let num1;
  let num2;
  let operator;
  let step = 0;
  let numArray = [];
  let numArray2 = [];
  let result = 0

function getNum(num) {
    if (step === 0 || step === 1){
    numArray.push(num)
    step = 1
    num1 = Number(numArray.join(''))
    input.value = num1

    }
    else if (step === 2) {
    numArray2.push(num)
    num2 = Number(numArray2.join(''))
    input.value = num2
    
}
}

function getOp(op) {
    step = 2
    operator = op
}


function operate(num1, num2, operator) {
if (operator === "+") {
    num1 + num2
    input.value = result
}
if (operator ==="-") {
    result = num1 - num2
    input.value = result
}
if (operator === "*") {
    result = num1 * num2
    input.value = result
}
else result = num1 / num2 
input.value = result
}




function clearDisplay() {
 
    input.value = 0;
    num1 = null;
    num2 = null;
    operator = null;
    step = 0;
    numArray = [];
    numArray2 = [];
    result = 0
}

function del() {
    console.log("delete")
}