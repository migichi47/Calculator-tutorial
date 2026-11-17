const button = document.getElementById("button");
const output = document.getElementById("output");
const firstInput = document.getElementById("first-input");
const secondInput = document.getElementById("second-input");

function onClick() {
  let result;
  const firstInputValue = Number(firstInput.value);
  const secondInputValue = Number(secondInput.value);

  const operation = document.querySelector(".dropdown").value;
  // conditional rendering
  if (operation === "add") {
    result = firstInputValue + secondInputValue;
  } else if (operation === "subtract") {
    result = firstInputValue - secondInputValue;
  } else if (operation === "divide") {
    result = firstInputValue / secondInputValue;
  } else if (operation === "multiply") {
    result = firstInputValue * secondInputValue;
  }

  output.textContent = result;
}

button.addEventListener("click", onClick);
