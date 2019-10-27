import * as React from 'react';

import { connect } from 'react-redux';

import Racers from '../racers';

import formatTime from '../timeFormatter';

const HonorableMention = (props) => {

  const [currentEntries, setCurrentEntries] = React.useState(null);
  const [index, setIndex] = React.useState(0);
  const [minIndex, setMinIndex] = React.useState(0);
  const [maxIndex, setMaxIndex] = React.useState(0);
  const [showHonorableMentions, setShowHonorableMentions] = React.useState(false);
  const [intervalId, setIntervalId] = React.useState(null);
  const [temporarilyHidden, setTemporarilyHidden] = React.useState(false);

  React.useEffect(() => {
    setCurrentEntries(props.entries);
  }, []);

  React.useEffect(() => {
    if (props.entries !== currentEntries) {
      setCurrentEntries(props.entries);
    }
  });

  React.useEffect(() => {
    if (props.entries.length <= 10) {
      setShowHonorableMentions(false);
      return;
    }

    setTemporarilyHidden(true);
    setTimeout(() => {
      setTemporarilyHidden(false);
    }, 2000);
    setMinIndex(10);
    setMaxIndex(props.entries.length - 1);
  }, [currentEntries]);

  React.useEffect(() => {
    clearInterval(intervalId);
    let id = setInterval(updateIndex, 17000);
    setIntervalId(id);
  }, [minIndex, maxIndex]);

  function updateIndex() {
    setTemporarilyHidden(true);
    setTimeout(() => {
      let newIndex = randomRange(minIndex, maxIndex + 1);
      setIndex(newIndex);
      if (newIndex > 9) {
        setShowHonorableMentions(true);
      }
    }, 1000);
    setTimeout(() => {
      setTemporarilyHidden(false);
    }, 2000);
  }

  function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function sortEntries(entryA, entryB) {
    if (entryA.time < entryB.time) {
      return -1;
    }
    if (entryB.time < entryA.time) {
      return 1;
    }
    return 0;
  }

  function getEntries() {
    return props.entries;
  }

  function getHonorableMentionClass() {
    let className = "honorable-mention__entry";
    if (temporarilyHidden) {
      className = `${className} ${className}--hidden`;
    }
    return className;
  }

  function renderTime(time) {
    let formattedTime = formatTime(time, 3, false);
    return <React.Fragment>
      <span className="honorable-mention__entry__time__seconds">
        { formattedTime.seconds }
      </span>
      <span className="honorable-mention__entry__time__seconds-indicator">
        s
      </span>
      <span className="honorable-mention__entry__time__points">
        { formattedTime.points }
      </span>
    </React.Fragment>;
  }

  function render() {
    let entry = props.entries.sort(sortEntries)[index];

    if (showHonorableMentions) {
      return <div className="honorable-mention">
        <div className="honorable-mention__label">
          Honorable Mention:
        </div>
        <div className={getHonorableMentionClass()}>
          <img src={ Racers[entry.racer].icon } />
          <span className="honorable-mention__entry__name">
            { entry.name }
          </span>
          <span className="honorable-mention__entry__time">
            { renderTime(entry.time) }
          </span>
        </div>
      </div>;
    }
    return null;
  }

  return <React.Fragment>
    { render() }
  </React.Fragment>;
};

function mapStateToProps(state) {
  const { entries } = state;
  return {
    entries: entries,
  };
}

export default connect(
  mapStateToProps,
  null
)(HonorableMention);
