import * as React from 'react';

import formatTime from '../../timeFormatter.js';

import Racers from '../../racers';
import Ranks from '../../ranks';

const LeaderboardEntry = (props) => {

  const rankClass = `entry__rank entry__rank--${props.rank}`;

  function getRankImage(rank) {
    let imagePath = Ranks[rank - 1].icon;

    return <img src={imagePath} alt={Ranks[rank - 1].name} />;
  }

  function renderTime(time) {
    let formattedTime = formatTime(time, 3, false);
    return <React.Fragment>
      <span className="entry__time__seconds">
        { formattedTime.seconds }
      </span>
      <span className="entry__time__seconds-indicator">
        s
      </span>
      <span className="entry__time__points">
        { formattedTime.points }
      </span>
    </React.Fragment>;
  }

  return <div className="entry">
    <div className="entry__content">
      <div className={rankClass}>
        { getRankImage(props.rank) }
      </div>
      <div className="entry__icon">
        <img src={Racers[props.racer].icon} />
      </div>
      <div className="entry__name">
        { props.name }
      </div>
      <div className="entry__time">
        { renderTime(props.time) }
      </div>
    </div>
  </div>;

};

export default LeaderboardEntry;
