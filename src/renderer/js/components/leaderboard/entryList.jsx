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
    return <Entry name={entry.name} rank={index + 1} time={entry.time} key={index} />;
  }

  return <div className="entry-list">
    <div className="entry-list__participants-container">
      <div className="entry-list__participants-container__participants">
      { props.entries.sort(sortEntries).map(renderEntry) }
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
