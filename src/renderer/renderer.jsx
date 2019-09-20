const style = require('./style/style.scss');

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/app.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('leaderboard')
);
