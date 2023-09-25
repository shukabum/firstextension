let calculate = document.getElementById("calculation");

let addition = document.getElementById("add");
let subtract = document.getElementById("sub");
let multiply = document.getElementById("mul");
let divide = document.getElementById("div");
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");

calculate.addEventListener("click", operation);
function operation() {
  if (addition.checked) {
    addNumbers();
  } else if (subtract.checked) {
    substractNumbers();
  } else if (multiply.checked) {
    multiplyNumbers();
  } else if (divide.checked) {
    divideNumbers();
  }
}

function addNumbers() {
  let solution = parseInt(firstNumber.value) + parseInt(secondNumber.value);
  return (document.getElementById("ans").textContent = "Result is " + solution);
}
function substractNumbers() {
  let solution = firstNumber.value - secondNumber.value;
  return (document.getElementById("ans").textContent = "Result is " + solution);
}
function multiplyNumbers() {
  solution = firstNumber.value * secondNumber.value;
  return (document.getElementById("ans").textContent = "Result is " + solution);
}
function divideNumbers() {
  solution = firstNumber.value / secondNumber.value;
  return (document.getElementById("ans").textContent = "Result is " + solution);
}
