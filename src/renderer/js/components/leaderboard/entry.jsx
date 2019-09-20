import * as React from 'react';

const LeaderboardEntry = (props) => {

  return <div className="entry">
    <div className="entry__content">
      <div className="entry__icon">

      </div>
      <div className="entry__name">
        { props.name }
      </div>
      <div className="entry__time">
        { props.time }
      </div>
      <div className="entry__edit">

      </div>
    </div>
  </div>;

};

export default LeaderboardEntry;
