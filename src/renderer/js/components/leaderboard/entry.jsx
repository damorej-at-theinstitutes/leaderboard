import * as React from 'react';

import Racers from '../../racers';
import Ranks from '../../ranks';

const LeaderboardEntry = (props) => {

  const rankClass = `entry__rank entry__rank--${props.rank}`;

  function getRankImage(rank) {
    let imagePath = Ranks[rank - 1].icon;

    return <img src={imagePath} alt={Ranks[rank - 1].name} />;
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
        { props.time }
      </div>
    </div>
  </div>;

};

export default LeaderboardEntry;
