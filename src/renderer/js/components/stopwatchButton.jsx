import * as React from 'react';
import Stopwatch from '../stopwatch';

import Overlay from './overlay';

import Racers from '../racers.js';

import { connect } from 'react-redux';
import { addEntry } from '../redux/actions';

import formatTime from '../timeFormatter';

import StopwatchDisplay from './stopwatchDisplay';

const TimerButton = (props) => {
  /*
   * Component state.
   */
  const [name, setName] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
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

  function getRacerIconPath(racer) {
    return `racer_icon_${racer}.png`;
  }

  function incrementRacer() {
    const currentRacer = racer;
    const maxRacers = Racers.length;

    if (currentRacer + 1 >= maxRacers) {
      setRacer(0);
      if (props.onChange) {
        props.onChange(0);
      }
      return;
    }
    setRacer(currentRacer + 1);
    if (props.onChange) {
      props.onChange(currentRacer + 1);
    }
  }

  function deincrementRacer() {
    const currentRacer = racer;
    const maxRacers = Racers.length;

    if (currentRacer == 0) {
      setRacer(maxRacers - 1);
      if (props.onChange) {
        props.onChange(maxRacers - 1);
      }
      return;
    }
    setRacer(currentRacer - 1);
  }

  function renderRacerChooser() {
    return <div className="racer-chooser" onClick={incrementRacer} onContextMenu={deincrementRacer}>
      <img src={Racers[racer].icon} />
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

  function getInputClassName() {
    let className = "stopwatch-button__racer__name";
    if (nameError) {
      className = `${className} ${className}--error`;
    }
    return className;
  }

  function showOverlay() {
    if (!name) {
      setNameError(true);
      return;
    }
    setNameError(false);
    if (props.onStart) {
      props.onStart();
    }
    setActive(true);
  }

  function onFinish(time) {
    if (props.onStop) {
      props.onStop(time);
    }
    props.addEntry(name, time, racer);
    setName('');
    setActive(false);
    setRacer(0);
  }

  function renderTime(time, digits) {
    let formattedTime = formatTime(time, digits);
    return <React.Fragment>
      <span className="stopwatch-button__display__seconds">
        {formattedTime.seconds}
      </span>
      <span className="stopwatch-button__display__seconds-indicator">
        s
      </span>
      <span className="stopwatch-button__display__points">
        {formattedTime.points}
      </span>
    </React.Fragment>
  }

  function getOverlayGreeting() {
    if (racer === 0) {
      return <React.Fragment>
        <span className="stopwatch-button__overlay__greeting--emphasis">
          { name }
        </span> is racing
      </React.Fragment>;
    }

    return <React.Fragment>
      <span className="stopwatch-button__overlay__greeting--emphasis">
          { name }
        </span> is racing as <span className="stopwatch-button__overlay__greeting--emphasis">
          { Racers[racer].name }
        </span>
        <img src={ Racers[racer].icon } alt='' />
      </React.Fragment>;
  }

  function getOverlayDisplay() {
    if (active) {
      return <StopwatchDisplay onFinish={onFinish} onCancel={onTimerCancel} />
    }
    return null;
  }

  /*
   * Component rendering.
   */
  return <React.Fragment>
      <div className="panel panel--padded">
        <div className="stopwatch-button">
          <div className="stopwatch-button__racer">
            { renderRacerChooser() }
            <input className={getInputClassName()} type="text" placeholder="Name" value={name} onChange={updateName} />
          </div>
          <Overlay className="stopwatch-button__overlay" visible={active}>
            <div className="stopwatch-button__overlay__greeting">
              { getOverlayGreeting() }
            </div>
            <div className="stopwatch-button__overlay__stopwatch">
              { getOverlayDisplay() }
            </div>
          </Overlay>
        </div>
      </div>
      <button className="shiny-button" type="button" onClick={showOverlay}>
        Start Race
      </button>
    </React.Fragment>;
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
