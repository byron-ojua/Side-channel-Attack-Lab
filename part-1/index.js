// ******************************
// *       Starter code         *
// *   Do not remove or modify  *
// ******************************

import { checkPin } from "./part1.js";

const input = document.getElementById("pin-input");
const result = document.getElementById("result");
const time = document.getElementById("time");
const button = document.getElementById("submit-btn");
const spinner = document.getElementById("spinner");
const secret = "4173";

function mimicDelay() {
  const delayStart = performance.now();
  while (performance.now() - delayStart < 200) {}
}

function handleSubmit() {
  const pin = input.value.trim();
  if (pin.length !== 4 || !/^\d+$/.test(pin)) {
    result.textContent = "Please enter a valid 4-digit PIN.";
    return;
  }

  spinner.classList.remove("hidden");
  result.textContent = "";
  time.textContent = "";

  // Run the timing after one tick to stabilize the event loop
  // Needed to remove timing bug
  setTimeout(() => {
    const start = performance.now();
    const isValid = checkPin(pin, secret, mimicDelay); // Simulates leak
    const end = performance.now();

    spinner.classList.add("hidden");
    result.textContent = isValid ? "PIN is correct!" : "Incorrect PIN.";
    time.textContent = `(Time taken: ${(end - start).toFixed(1)} ms)`;
  }, 0);
}

// Handle button click
button.addEventListener("click", handleSubmit);

// Allow Enter key to submit
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSubmit();
  }
});
