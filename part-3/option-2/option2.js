// ******************************
// *   Side-Channel Attack Lab  *
// *      Part 3 - Option 2     *
// ******************************
// Name: [Your Name]

// Your task is to implement the checkPin function so that it
// compares the input PIN to the secret PIN in a way that doesn't
// leak timing information based on how many digits are correct.
// The delayFunction simulates a time delay for each comparison
// a program makes when checking the PIN. The delay is intended to
// mimic processing time that would happen in a real system and
// could be exploited in a timing attack. You must call the
// delayFunction for every comparison made.

function checkPin(pin, secret, delayFunction) {
  for (let i = 0; i < secret.length; i++) {
    if (pin[i] !== secret[i]) return false;

    // IMPORTANT: Every comparison you do must be followed by a delay
    delayFunction();
  }
  return true;
}
