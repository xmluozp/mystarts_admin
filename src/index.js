import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/scss/index.scss';
import App from './App.tsx';
import * as serviceWorker from './serviceWorker';

//=========================================================Amplify
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'
//=========================================================Amplify

//=========================================================REDUX
import { Provider } from 'react-redux'; 
import helper from './_helper';
//=========================================================REDUX

Amplify.configure(aws_exports)

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
