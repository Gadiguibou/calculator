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

// Clear display when clearButton is clicked.
clearButton.addEventListener("click", function clearDisplay() {
  displayContent.textContent = "";
});