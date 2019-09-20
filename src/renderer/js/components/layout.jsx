import * as React from 'react';

import LeaderboardEntryForm from './leaderboardEntryForm';
import LeaderboardEntryList from './leaderboard/entryList';

const Layout = () => {
  return <div className="layout">
    <div className="layout__left">
      <LeaderboardEntryForm />
    </div>
    <div className="layout__right">
      <LeaderboardEntryList />
    </div>
  </div>;
};

export default Layout;
