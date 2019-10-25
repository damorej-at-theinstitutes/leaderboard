import * as React from 'react';
import Stopwatch from '../stopwatch';

import RacerChooser from './racerChooser';

import { connect } from 'react-redux';
import { addEntry } from '../redux/actions';

import formatTime from '../timeFormatter';

const TimerButton = (props) => {
  /*
   * Component state.
   */
  const [name, setName] = React.useState('');
  const [racer, setRacer] = React.useState(0);
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
  let timerLabel = "Go";
  if (active === true) {
    timerLabel = "Stop";
  }

  let timerClass = "stopwatch-button__controls__main__button stopwatch-button__controls__main__button--go";
  if (active === true) {
    timerClass = "stopwatch-button__controls__main__button stopwatch-button__controls__main__button--cancel";
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

  function updateName(event) {
    setName(event.target.value);
  }

  function updateRacer(event) {
    setRacer(event);
  }

  /*
   * Activates stopwatch if inactive, or stops it if active.
   */
  function onTimerClick() {
    if (active) {
      props.onStop && props.onStop(time);
      stopwatch.stop();
      props.addEntry(name, time, racer);
      setName('');
    }
    else {
      if (!name) {
        // TODO Show error to user.
        console.log("No racer name specified");
        return;
      }
      props.onStart && props.onStart();
      stopwatch.start(10, (elapsed) => {
        setTime(elapsed);
      });
    }
    setActive(!active);
  }

  /*
   * Component rendering.
   */
  return <div className="stopwatch-button">
      <div className="stopwatch-button__racer">
        <RacerChooser onChange={updateRacer} />
        <input className="stopwatch-button__racer__name" type="text" placeholder="Name" value={name} onChange={updateName} />
      </div>
      <div className="stopwatch-button__display">
        {formatTime(time, 3)}
      </div>
      <div className="stopwatch-button__controls">
        <div className="stopwatch-button__controls__main">
          <button type="button" onClick={onTimerClick} className={timerClass}>
            {timerLabel}
          </button>
        </div>
        {cancelButton}
      </div>
    </div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEntry: (name, time, racer) => dispatch(addEntry(name, time, racer)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(TimerButton);

//export default TimerButton;
