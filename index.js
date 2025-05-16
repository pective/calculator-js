let first_operand = '';
let second_operand = '';
let current_operator = '';

const currDisplay = document.querySelector('#currDisplay')
const prevDisplay = document.querySelector("#prevDisplay");
const operandButtons = document.querySelectorAll('.operands');
const operatorButtons = document.querySelectorAll('.operators');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');

currDisplay.textContent = '';

Array.from(operandButtons).forEach(element => {
  element.addEventListener("click", function() {
    currDisplay.textContent = currDisplay.textContent + element.value;
  })
});

Array.from(operatorButtons).forEach(element => {
  element.addEventListener("click", function() {
    current_operator = element.value;
    // currDisplay.textContent = currDisplay.textContent + current_operator;
    prevDisplay.textContent = `${currDisplay.textContent} ${current_operator}`;
    currDisplay.textContent = '';
  })
})

clearButton.addEventListener("click", function() {
  currDisplay.textContent = '';
  first_operand = '';
  second_operand = '';
  current_operator = '';
})

function setOperands() {
  first_operand = currDisplay.textContent;
}

equalsButton.addEventListener("click", function() {
  currDisplay.textContent = evaluate(current_operator, first_operand)
})


function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function evaluate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      if(b === 0) return null;
      else return divide(a, b);
    default:
      break;
  }
}
// RIPPLE EFFECT BELOW

function createRipple(event) {
    const button = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple"); 
    
    button.appendChild(circle);
}

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}