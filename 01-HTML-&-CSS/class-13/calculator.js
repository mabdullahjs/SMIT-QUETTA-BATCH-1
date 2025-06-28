const calculatorScreen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let operator = '';
let previousInput = '';
let resultDisplayed = false;

function updateScreen(value) {
  calculatorScreen.value = value;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const { value, classList } = button;

    if (classList.contains('all-clear')) {
      currentInput = '';
      previousInput = '';
      operator = '';
      updateScreen('');
      resultDisplayed = false;
    } else if (classList.contains('operator')) {
      if (currentInput !== '') {
        if (operator && previousInput !== '') {
          currentInput = eval(`${previousInput}${operator}${currentInput}`);
          updateScreen(currentInput);
        }
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else if (classList.contains('equal-sign')) {
      if (currentInput && operator && previousInput) {
        currentInput = eval(`${previousInput}${operator}${currentInput}`);
        updateScreen(currentInput);
        operator = '';
        previousInput = '';
        resultDisplayed = true;
      }
    } else if (classList.contains('decimal')) {
      if (!currentInput.includes('.')) {
        currentInput += value;
        updateScreen(currentInput);
      }
    } else {
      if (resultDisplayed) {
        currentInput = value;
        resultDisplayed = false;
      } else {
        currentInput += value;
      }
      updateScreen(currentInput);
    }
  });
});