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
      props.onChange(0);
      return;
    }
    setRacer(racer + 1);
    if (props.onChange) {
      props.onChange(racer + 1);
    }
  }

  return <div className="racer-chooser" onClick={incrementRacer}>
    <img src={Racers[racer].icon} />
  </div>;
};

export default RacerChooser;
