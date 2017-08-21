import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

import GamesContainer from './containers/GamesContainer';

import Async from './middleware/async';

import registerServiceWorker from './registerServiceWorker';

// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, composeWithDevTools())}>
    <GamesContainer />
  </Provider>
  , document.querySelector('.root'));

registerServiceWorker();
