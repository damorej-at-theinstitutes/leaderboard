const style = require('./scss/style.scss');

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './js/components/app.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('leaderboard')
);
