import * as React from 'react';

import StopwatchButton from './stopwatchButton';

const LeaderboardEntryForm = () => {
  return <div className="leaderboard-entry-form panel-container">
    <div className="leaderboard-entry-form__controls">
      <StopwatchButton />
    </div>
  </div>;
};

export default LeaderboardEntryForm;
