// ******************************
// *       Starter code         *
// *   Do not remove or modify  *
// ******************************

export function checkPin(pin, secret, onFail, onSuccess) {
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
