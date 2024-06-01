const buttons = document.querySelectorAll('input[type="button"');

const input = document.getElementById('display')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() { // when a button gets clicked, an function will fire
      input.value += this.value; // 'this' is the button that gets clicked. We add its value to the input field
    });
  }

// function operate(num1, num2, operator) {
// if (operator = "+") {
//     return num1 + num2
// }
// if (operator = "-") {
//     return num1 - num2
// }
// if (operator = "x") {
//     return num1 * num2
// }
// else num1 / num2
// }

// function clearDisplay() {
//     display.textContent = "";
// }