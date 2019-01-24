import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faTimes,
  faRssSquare
} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

library.add(faEdit);
library.add(faTimes);
library.add(faRssSquare);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
