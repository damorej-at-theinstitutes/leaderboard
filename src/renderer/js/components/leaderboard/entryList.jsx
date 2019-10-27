import * as React from 'react';

import { connect } from 'react-redux';

import Entry from './entry';

const LeaderboardEntryList = (props) => {

  function sortEntries(entryA, entryB) {
    if (entryA.time < entryB.time) {
      return -1;
    }
    if (entryB.time < entryA.time) {
      return 1;
    }
    return 0;
  }

  function renderEntry(entry, index) {
    return <Entry name={entry.name} racer={entry.racer} rank={index + 1} time={entry.time} key={index} />;
  }

  function renderEntries() {
    if (props.entries.length > 0) {
      return props.entries
        .sort(sortEntries)
        .slice(0, 10)
        .map(renderEntry);
    }
    return <div className="entry-list__participants-container__participants__none">
      No entries recorded
    </div>
  }

  return <div className="entry-list panel-container">
    <div className="entry-list__participants-container panel">
      <div className="entry-list__participants-container__participants entry-container">
          { renderEntries() }
      </div>
    </div>
  </div>
};

function mapStateToProps(state) {
  const { entries } = state
  return {
    entries: entries,
  };
}

export default connect(
  mapStateToProps,
  null,
)(LeaderboardEntryList);
