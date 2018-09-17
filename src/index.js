import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './container';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
