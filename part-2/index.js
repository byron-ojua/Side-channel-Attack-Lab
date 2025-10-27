// ******************************
// *       Starter code         *
// *   Do not remove or modify  *
// ******************************

import { checkPin } from "./part2.js";

const led = document.getElementById("led");
const display = document.getElementById("display");
const keys = document.querySelectorAll(".key");
const secret = "5289";

let currentInput = "";

function updateDisplay() {
  const shown = currentInput.padEnd(4, "_");
  display.textContent = shown;
}

function flashRed() {
  led.classList.remove("green");
  led.classList.add("red");
  setTimeout(() => led.classList.remove("red"), 300);

  currentInput = "";
  updateDisplay();
}

function flashGreen() {
  led.classList.add("green");
  updateDisplay();
}

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (currentInput.length >= 4) return;

    currentInput += key.textContent;
    updateDisplay();

    // Check the PIN after each key press
    checkPin(currentInput, secret, flashRed, flashGreen);
  });
});

updateDisplay();
