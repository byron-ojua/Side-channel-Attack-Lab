// ******************************
// *       Starter code         *
// *   Do not remove or modify  *
// ******************************

export function checkPin(pin, secret, delayFunction) {
  for (let i = 0; i < secret.length; i++) {
    if (pin[i] !== secret[i]) return false;

    // Introduce a delay to simulate timing leak
    delayFunction();
  }
  return true;
}
