import * as React from 'react';

import Countdown from '../countdown';
import Stopwatch from '../stopwatch';

import formatTime from '../timeFormatter';

const StopwatchDisplay = (props) => {

  const [countdownRemaining, setCountdownRemaining] = React.useState(0);
  const [countdown, setCountdown] = React.useState(null);
  const [countdownFinished, setCountdownFinished] = React.useState(false);
  const [stopwatch, setStopwatch] = React.useState(null);
  const [stopwatchFinished, setStopwatchFinished] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [finished, setFinished] = React.useState(false);

  /*
   * Create stopwatch object on mount.
   */
  React.useEffect(() => {
    let id = setTimeout(() => {
      let countdownObject = Countdown();
      countdownObject.start(3, updateCountdown, finishCountdown, 1100);
      setCountdown(countdownObject);
    }, 1600);

    return () => {clearTimeout(id)};
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    }
  }, [stopwatch, finished]);

  function updateCountdown(remaining) {
    setCountdownRemaining(remaining);
  }

  function finishCountdown(remaining) {
    let stopwatchObject = Stopwatch();
    stopwatchObject.start(10, (elapsed) => {
      setTime(elapsed);
    });
    setStopwatch(stopwatchObject);
    setCountdownFinished(true);
  }

  function getCountdownClassName() {
    let className = "countdown__remaining";
    let classNameExtension = countdown.duration - countdown.elapsed;
    if (countdownFinished) {
      classNameExtension = "finished";
    }
    className = `${className} ${className}--${classNameExtension}`;
    return className;
  }

  function displayCountdown() {
    if (!countdown) {
      return null;
    }

    let content = countdown.duration - countdown.elapsed;
    if (countdownFinished) {
      content = "Go!";
      if (stopwatchFinished) {
        content = "Great job!";
      }
    }

    return <div className="countdown">
      <span className={getCountdownClassName()}>
        { content }
      </span>
    </div>;
  }

  function onClickFinish() {
    if (props.onFinish) {
      props.onFinish(time);
    }
  }

  function onClickCancel() {
    if (finished) {
      return;
    }
    if (props.onCancel) {
      props.onCancel();
    }
  }

  function finish() {
    if (!stopwatch) {
      return;
    }
    if (!finished) {
      stopwatch.stop();
      setStopwatchFinished(true);
      setTimeout(() => {
        onClickFinish();
      }, 5000);
    }
    setFinished(true);
  }

  function displayTime() {
    let formattedTime = formatTime(time, 3);
    let className = "stopwatch-display__time";
    if (!time) {
      className = `${className} ${className}--hidden`;
    }
    if (stopwatchFinished) {
      className = `${className} ${className}--finished`;
    }

    return <div className={className}>
      <span className="stopwatch-display__time__seconds">
        { formattedTime.seconds }
      </span>
      <span className="stopwatch-display__time__seconds-indicator">
        s
      </span>
      <span className="stopwatch-display__time__points">
        { formattedTime.points }
      </span>
    </div>
  }

  function displayControls() {
    if (finished) {
      return null;
    }
    return <div className="stopwatch-display__controls">
      <button onClick={finish} className="overlay-button">Finish!</button>
      <button onClick={onClickCancel} className="overlay-button overlay-button--small overlay-button--text">Cancel</button>
    </div>
  }

  function onKeyDown(event) {
    if (event.key === 'Escape') {
      onClickCancel();
      return;
    }
    if (event.key === ' ' || event.key === 'Enter') {
      finish();
      return;
    }
  }

  return <div className="stopwatch-display">
    { displayCountdown() }
    { displayTime() }
    { countdownFinished && displayControls() }
  </div>;



}

export default StopwatchDisplay;
