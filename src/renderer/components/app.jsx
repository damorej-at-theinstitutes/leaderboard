import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from '../leaderboard/store';

import Layout from './layout';

const App = () => {
  return <Provider store={store}>
      <div className='app__container'>
        <Layout />
      </div>
    </Provider>
}

export default App;
