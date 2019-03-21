import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/root";
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faTimes,
  faThumbsUp,
  faThumbsDown,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import './index.css';

library.add(faEdit);
library.add(faTimes);
library.add(faThumbsUp);
library.add(faThumbsDown);
library.add(faHome);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
