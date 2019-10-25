import * as actions from './actions';

const initialState = {
  entries: [],
}

function leaderboardApp(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_ENTRY:
      return Object.assign({}, state, {
        entries: [
          ...state.entries,
          {
            name: action.name,
            time: action.time,
            racer: action.racer,
            uuid: action.uuid,
          }
        ],
      });
    break;

    case actions.DELETE_ENTRY:
      return Object.assign({}, state, {
        entries: state.entries.filter((entry) => {
          return (entry.uuid !== action.uuid);
        }),
      });
    break;

    case actions.UPDATE_ENTRY:
      return Object.assign({}, state, {
        entries: state.entries.map((entry) => {
          if (entry.uuid === action.uuid) {
            entry.name = action.name;
            entry.time = action.time;
            entry.racer = action.racer;
          }
          return entry;
        }),
      });
    break;
  }

  return state;
}

export default leaderboardApp;
