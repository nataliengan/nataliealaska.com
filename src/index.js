import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter } from 'react-router-dom';
import reducers from './reducers';

import '../style/style.css';

import App from './components/App';

const Store = createStore(reducers);

ReactDOM.render(
  <Provider store={ Store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
