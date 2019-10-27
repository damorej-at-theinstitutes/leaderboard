// TODO Improve documentation.

/**
 * Formats the given elapsed time as seconds in a human-readable format.
 *
 * Time: Time (in milliseconds) to format.
 * Digits: Max number of digits to display.
 */
const timeFormatter = (time, digits, padSeconds = true) => {
  const maxSeconds = parseInt('9'.repeat(digits), 10);
  const seconds = Math.floor(time / 1000);
  const points = Math.floor((time % 1000) / 10);

  // Short-circuit if time is maxed.
  if (seconds > maxSeconds) {
    return {
      seconds: `${maxSeconds}`,
      points: '99',
    };
  }

  let secondsPad = '';
  let pointsPad = '';

  if (padSeconds && seconds.toString().length < digits) {
    secondsPad = '0'.repeat(digits - seconds.toString().length);
  }
  if (points.toString().length < 2) {
    pointsPad = '0';
  }

  return {
    seconds: `${secondsPad}${seconds}`,
    points: `${pointsPad}${points}`,
  };
}

export default timeFormatter;
