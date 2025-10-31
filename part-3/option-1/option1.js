// ******************************
// *   Side-Channel Attack Lab  *
// *      Part 3 - Option 1     *
// ******************************
// Name: [Your Name]

// Your task is to implement the checkPin function so that it compares
// the input PIN to the secret PIN in a way that doesn't leak information
// about how many digits are correct. The onFail callback should be called
// when the PIN is incorrect, and the onSuccess callback should be called
// when the PIN is correct. Modify this function to ensure that no optical
// side-channel information (like LED flashes) can be used to infer
// how many digits were correct.

function checkPin(pin, secret, onFail, onSuccess) {
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] !== secret[i]) {
      // LED flashes red immediately when a wrong digit is detected
      onFail();
      return;
    }
  }

  if (pin == secret) {
    onSuccess();
  }
}
