import * as React from 'react';
import Stopwatch from '../leaderboard/stopwatch';

import { connect } from 'react-redux';
import { addEntry } from '../leaderboard/actions';

const TimerButton = (props) => {
  /*
   * Component state.
   */
  const [active, setActive] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [stopwatch, setStopwatch] = React.useState(null);

  /**
   * Create stopwatch object on mount.
   */
  React.useEffect(() => {
    setStopwatch(Stopwatch());
  }, []);

  /*
   * Timer button label.
   */
  let timerLabel = "Start Timer";
  if (active === true) {
    timerLabel = "Stop Timer";
  }

  /*
   * Cancel button.
   */
  let cancelButton = null;
  if (active === true){
    cancelButton = <div className="stopwatch-button__controls__cancel">
      <button type="button" onClick={onTimerCancel}>
        Cancel
      </button>
    </div>;
  }

  /**
   * Cancels stopwatch and clears recorded time.
   */
  function onTimerCancel() {
    stopwatch.stop();
    setTime(0);
    setActive(false);
  }

  /*
   * Activates stopwatch if inactive, or stops it if active.
   */
  function onTimerClick() {
    if (active) {
      props.onStop && props.onStop(time);
      stopwatch.stop();
      console.log(props);
      console.log(props.conAddEntry("Jon", 500));
    }
    else {
      props.onStart && props.onStart();
      stopwatch.start(10, (elapsed) => {
        setTime(elapsed);
      });
    }
    setActive(!active);
  }

  /**
   * Format elapsed milliseconds into seconds.
   */
  function formatTime() {
    const secondsDigits = 3;

    const seconds = Math.floor(time / 1000);
    const points = Math.floor((time % 1000) / 10);

    let secondsPad = '';
    let pointsPad = '';

    if (seconds.toString().length < secondsDigits) {
      secondsPad = '0'.repeat(secondsDigits - seconds.toString().length);
    }
    if (points.toString().length < 2) {
      pointsPad = '0';
    }

    return `${secondsPad}${seconds}:${pointsPad}${points}`;
  }

  /*
   * Component rendering.
   */
  return <div className="stopwatch-button">
      <div className="stopwatch-button__display">
        {formatTime(time)}
      </div>
      <div className="stopwatch-button__controls">
        <div className="stopwatch-button__controls__main">
          <button type="button" onClick={onTimerClick}>
            {timerLabel}
          </button>
        </div>
        {cancelButton}
      </div>
    </div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    conAddEntry: () => dispatch(addEntry()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(TimerButton);

//export default TimerButton;
