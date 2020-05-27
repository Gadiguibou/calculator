// Basic functions to compute operations.
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

const operate = (firstOperand, secondOperand, operator) => {
  if (operator === "+") {
    return add(firstOperand, secondOperand);
  } else if (operator === "−") {
    return substract(firstOperand, secondOperand);
  } else if (operator === "×") {
    return multiply(firstOperand, secondOperand);
  } else if (operator === "÷") {
    return divide(firstOperand, secondOperand);
  }
};

const displayContent = document.querySelector(".input-text");

const operandDisplayed = document.querySelector(".stored-operand");
const operatorDisplayed = document.querySelector(".stored-operator");

const clearDisplay = () => {
  displayContent.textContent = "";
};

let operator = "";
let storedOperand;

const executeOnOperatorPress = (operatorContent) => {
  // Update operator if there's already one and the display is empty
  if (!displayContent.textContent && operator) {
    operator = operatorContent;
    operatorDisplayed.textContent = operator;
  }
  //  Store result of current operation in storedOperand if chaining operations
  else if (displayContent.textContent && operator) {
    storedOperand = operate(
      storedOperand,
      Number(displayContent.textContent),
      operator
    );
    operandDisplayed.textContent = storedOperand;
    clearDisplay();
    operator = operatorContent;
    operatorDisplayed.textContent = operator;
  }
  // Do nothing if operatorButton is pressed when there's no value to compute
  else if (!displayContent.textContent && !operator) {
    return;
  }
  // Store operand and operator and wait for next input (default case)
  else if (displayContent.textContent && !operator) {
    storedOperand = Number(displayContent.textContent);
    operandDisplayed.textContent = storedOperand;
    clearDisplay();
    operator = operatorContent;
    operatorDisplayed.textContent = operator;
  }
};

const executeOnEqualPress = () => {
  // Do not execute anything if no operators have been entered
  if (!operator) {
    return;
  }
  // If there is an operator but no displayContent to compute
  // Return current storedOperand
  else if (!displayContent.textContent) {
    displayContent.textContent = storedOperand;
  }
  // (Default case) Compute current operations and display result
  else {
    displayContent.textContent = operate(
      storedOperand,
      Number(displayContent.textContent),
      operator
    );
  }
  // Reset all variables
  operator = "";
  storedOperand = null;
  operandDisplayed.textContent = "";
  operatorDisplayed.textContent = operator;
};

// Set button behaviors
const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", function printNumberToDisplay() {
    displayContent.textContent += numberButton.textContent;
  });
});

const operatorButtons = document.querySelectorAll(".operator-button");

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    executeOnOperatorPress(operatorButton.textContent);
  });
});

const equalButton = document.querySelector(".equal-button");

equalButton.addEventListener("click", () => {
  executeOnEqualPress();
});

const dotButton = document.querySelector(".dot-button");

dotButton.addEventListener("click", () => {
  if (!displayContent.textContent.includes(".")) {
    displayContent.textContent += ".";
  }
});

const clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", () => {
  clearDisplay();
});

const allClearButton = document.querySelector(".all-clear-button");

allClearButton.addEventListener("click", () => {
  operator = "";
  storedOperand = null;
  clearDisplay();
});

const backspaceButton = document.querySelector(".backspace-button");

backspaceButton.addEventListener("click", () => {
  displayContent.textContent = displayContent.textContent.slice(0, -1);
});

// Add keyboard support for almost everything
window.addEventListener("keydown", (e) => {
  if (
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "0"
  ) {
    displayContent.textContent += e.key;
  } else if (e.key === "Backspace") {
    displayContent.textContent = displayContent.textContent.slice(0, -1);
  } else if (e.key === "." || e.key === ",") {
    if (!displayContent.textContent.includes(".")) {
      displayContent.textContent += ".";
    }
  } else if (e.key === "+") {
    executeOnOperatorPress("+");
  } else if (e.key === "-") {
    executeOnOperatorPress("−");
  } else if (e.key === "*") {
    executeOnOperatorPress("×");
  } else if (e.key === "/") {
    executeOnOperatorPress("÷");
  } else if (e.key === "Enter" || e.key === "=") {
    executeOnEqualPress();
  }
});
