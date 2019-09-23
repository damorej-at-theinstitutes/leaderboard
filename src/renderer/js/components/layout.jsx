import * as React from 'react';

import LeaderboardEntryForm from './leaderboardEntryForm';
import LeaderboardEntryList from './leaderboard/entryList';

const Layout = () => {
  return <div className="layout">
    <div className="layout__header">
      <div className="layout__header__tab">
        Header woo hoo
      </div>
      <div className="layout__header__squares"></div>
    </div>
    <div className="layout__main">
      <div className="layout__main__left">
        <LeaderboardEntryForm />
      </div>
      <div className="layout__main__right">
        <LeaderboardEntryList />
      </div>
    </div>
    <div className="layout__footer">
      <div className="layout__footer__squares"></div>
    </div>
  </div>;
};

export default Layout;
