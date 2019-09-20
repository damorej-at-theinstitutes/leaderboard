import { createStore } from 'redux';
import leaderboardApp from './reducers';
import {
  addEntry,
  deleteEntry,
  updateEntry,
} from './actions';

const store = createStore(leaderboardApp);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addEntry('Joe DAmore', 32432));
store.dispatch(addEntry('Jeff Soandso', 43243));

//unsubscribe();

export default store;
