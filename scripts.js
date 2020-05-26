const add = (a, b) => {
  return a + b;
};

const substract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const displayContent = document.querySelector(".input-text");

const clearButton = document.querySelector(".clear-button");

const clearDisplay = () => {
  displayContent.textContent = "";
};

// Clear display when clearButton is clicked.
clearButton.addEventListener("click", clearDisplay);  

const numberButtons = document.querySelectorAll(".number-button");

// Add numbers to the screen when numberButtons are clicked
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", function printNumberToDisplay() {
    displayContent.textContent += numberButton.textContent;
  });
});

const operate = (firstOperand, secondOperand, operator) => {
  if (operator === "+") {
    return add(firstOperand, secondOperand);
  } else if (operator === "-") {
    return substract(firstOperand, secondOperand);
  } else if (operator === "×") {
    return multiply(firstOperand, secondOperand);
  } else if (operator === "÷") {
    return divide(firstOperand, secondOperand);
  }
};

const operatorButtons = document.querySelectorAll(".operator-button");

let operator = "";
let storedOperand;

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    // Update operator if there's already one and the display is empty
    if (!displayContent.textContent && operator) {
      operator = operatorButton.textContent;
    } 
    //  Store result of current operation in storedOperand if chaining operations
    else if (displayContent.textContent && operator) {
      storedOperand = operate(storedOperand, Number(displayContent.textContent), operator);
      clearDisplay();
      operator = operatorButton.textContent;
    }
    // Do nothing if operatorButton is pressed when there's no value to compute 
    else if (!displayContent.textContent && !operator) {
      return;
    } 
    // Store operand and operator and wait for next input (default case)
    else if (displayContent.textContent && !operator) {
      storedOperand = Number(displayContent.textContent);
      clearDisplay();
      operator = operatorButton.textContent;
    }
  });
});

const equalButton = document.querySelector(".equal-button");

equalButton.addEventListener("click", () => {
  if (!displayContent.textContent) {
    displayContent.textContent = storedOperand;
  } else {
    displayContent.textContent = operate(storedOperand, Number(displayContent.textContent), operator);
  }
  operator = "";
  storedOperand = null;
});