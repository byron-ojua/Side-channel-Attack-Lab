// ******************************
// *   Side-Channel Attack Lab  *
// *      Part 3 - Option 1     *
// ******************************
// Name: [Your Name]

function checkPin(pin, secret, delayFunction) {
  for (let i = 0; i < secret.length; i++) {
    if (pin[i] !== secret[i]) return false;

    // IMPORTANT: Every comparison you do must be followed by a delay
    delayFunction();
  }
  return true;
}
