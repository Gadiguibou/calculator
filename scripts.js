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
