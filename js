const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Event handlers
document.querySelectorAll(".numeric-button").forEach(button => {
  button.addEventListener("click", function () {
    appendToDisplay(button.innerText);
  });
});

document.querySelectorAll(".operator-button").forEach(button => {
  button.addEventListener("click", function () {
    appendToDisplay(button.innerText);
  });
});

document.querySelector(".clear-button").addEventListener("click", clearDisplay);

document.querySelector(".calculate-button").addEventListener("click", calculate);
