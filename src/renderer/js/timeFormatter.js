// TODO Improve documentation.

/**
 * Formats the given elapsed time as seconds in a human-readable format.
 *
 * Time: Time (in milliseconds) to format.
 * Digits: Max number of digits to display.
 */
const timeFormatter = (time, digits) => {
  const maxSeconds = parseInt('9'.repeat(digits), 10);

  const seconds = Math.floor(time / 1000);
  const points = Math.floor((time % 1000) / 10);

  // Short-circuit if seconds exceeds maxSeconds.
  if (seconds > maxSeconds) {
    return `${maxSeconds}:99`;
  }

  let secondsPad = '';
  let pointsPad = '';

  if (seconds.toString().length < digits) {
    secondsPad = '0'.repeat(digits - seconds.toString().length);
  }
  if (points.toString().length < 2) {
    pointsPad = '0';
  }

  return `${secondsPad}${seconds}:${pointsPad}${points}`;
}

export default timeFormatter;
