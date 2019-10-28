import { createStore } from 'redux';
import leaderboardApp from './reducers';
import {
  addEntry,
  deleteEntry,
  updateEntry,
} from './actions';

const store = createStore(leaderboardApp);

//const unsubscribe = store.subscribe(() => console.log(store.getState()));

//store.dispatch(addEntry('Joe DAmore', 32432, 0));
//store.dispatch(addEntry('Steve Soandso', 15641, 2));
//store.dispatch(addEntry('Jack Soandso', 89132, 5));
//store.dispatch(addEntry('Isaac Soandso', 15648, 11));
//store.dispatch(addEntry('Cage Soandso', 23568, 1));
//store.dispatch(addEntry('Jack Soandso, Jr.', 112851, 3));
//store.dispatch(addEntry('Mario Bro', 32648, 8));
//store.dispatch(addEntry('Luigi Bro', 84213, 9));
//store.dispatch(addEntry('Smith Willickers', 77101, 13));
//store.dispatch(addEntry('Jeff Soandso', 43842, 3));
//store.dispatch(addEntry('Carry Crouchpotato', 91548, 10));
//store.dispatch(addEntry('Tommy Ketchup', 231684, 16));
//store.dispatch(addEntry('Liz Mustard', 15118, 20));
//store.dispatch(addEntry('Maxwell Mayo', 6654148, 17));
//unsubscribe();

export default store;
