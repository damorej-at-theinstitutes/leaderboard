import * as React from 'react';

import Racers from '../racers';

const RacerChooser = (props) => {

  const [racer, setRacer] = React.useState(0);

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
      props.onChange(maxRacers - 1);
      return;
    }
    setRacer(currentRacer - 1);
    if (props.onChange) {
      props.onChange(currentRacer - 1);
    }
  }

  return <div className="racer-chooser" onClick={incrementRacer} onContextMenu={deincrementRacer}>
    <img src={Racers[racer].icon} />
  </div>;
};

export default RacerChooser;
