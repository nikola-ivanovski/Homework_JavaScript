let topDisplay = document.querySelector("#top");
let bottomDisplay = document.querySelector("#bottom");

function divide(x, y) {
  let result = x / y;
  return result;
}

function multiply(x, y) {
  let result = x * y;
  return result;
}

function add(x, y) {
  let result = x + y;
  return result;
}

function substract(x, y) {
  let result = x - y;
  return result;
}

function calculate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return substract(num1, num2);
    case "×":
      return multiply(num1, num2);
    case "÷":
      if (num2 == 0) {
        return NaN;
      }
      return divide(num1, num2);
  }
}

let operator;
let firstNum = "";
let secondNum = "";
let total;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let buttonType = button.className;
    switch (buttonType) {
      case "digit":
        if (total && bottomDisplay.textContent !== "") {
          break;
        }
        topDisplay.textContent += button.textContent;
        if (!operator) {
          firstNum += button.textContent;
        } else {
          secondNum += button.textContent;
        }
        break;

      case "operator":
        if (firstNum !== "" && secondNum == "") {
          operator = button.textContent;
          bottomDisplay.textContent = "";
        }
        if (total) {
          topDisplay.textContent = total;
        }
        if (secondNum !== "") {
          total = calculate(
            operator,
            parseFloat(firstNum),
            parseFloat(secondNum)
          );
          operator = button.textContent;
          secondNum = "";
          firstNum = total;
          topDisplay.textContent = total;
        }
        topDisplay.textContent += button.textContent;
        break;

      case "decimal":
        secondNum == "" && operator == null
          ? (firstNum += ".")
          : (secondNum += ".");
        topDisplay.textContent += button.textContent;
        break;

      case "calculate":
        total = calculate(
          operator,
          parseFloat(firstNum),
          parseFloat(secondNum)
        );
        operator = secondNum = "";
        firstNum = total;
        bottomDisplay.textContent = total;
        break;

      case "clear":
        topDisplay.textContent = "";
        bottomDisplay.textContent = "";
        operator = firstNum = secondNum = "";
        total = "";
        break;

      case "backspace":
        document.querySelector("#top").value = String(topDisplay).substring(
          0,
          topDisplay.length - 1
        );
    }
  });
});
