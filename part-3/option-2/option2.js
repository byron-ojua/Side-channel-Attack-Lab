// ******************************
// *   Side-Channel Attack Lab  *
// *      Part 3 - Option 1     *
// ******************************
// Name: [Your Name]

function checkPin(pin, secret, delayFunction) {
  for (let i = 0; i < secret.length; i++) {
    if (pin[i] !== secret[i]) return false;

    // * DO NOT REMOVE OR MODIFY BELOW THIS LINE *
    delayFunction();
    // * DO NOT REMOVE OR MODIFY ABOVE THIS LINE *
  }
  return true;
}
