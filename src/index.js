import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

//=========================================================REDUX
import { Provider } from 'react-redux'; 
import helper from './_helper';

//=========================================================REDUX

ReactDOM.render(
  <React.StrictMode>
    <Provider store={helper.store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
