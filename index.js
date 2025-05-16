const display = document.querySelector('#display')
const operandButtons = document.querySelectorAll('.operands');
const operatorButtons = document.querySelectorAll('.operators');

display.textContent = '';

Array.from(operandButtons).forEach(element => {
  element.addEventListener("click", function() {
    display.textContent = display.textContent + element.value;
  })
});

Array.from(operatorButtons).forEach(element => {
  element.addEventListener("click", function() {
    display.textContent = display.textContent + element.value;
  })
})

const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", function() {
  display.textContent = '';
})

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