const OPERATOR_LIST = ['+', '-', '*', '/', '%'];

const display = document.querySelector('#display')
display.textContent = '';
const operandButton = document.querySelectorAll('.operands');

Array.from(operandButton).forEach(element => {
  element.addEventListener("click", function(e) {
    const val = element.value;

    display.textContent =+ val;
  })
});

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