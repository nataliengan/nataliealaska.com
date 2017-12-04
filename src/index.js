import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';

import NavBar from './components/navbar';
import Home from './components/home';
import People from './components/people';
import Boudoir from './components/boudoir';
import Diary from './components/Diary';
import About from './components/About';

const Store = createStore(reducers);

ReactDOM.render(
  <Provider store={ Store }>
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/people" component={People} />
          <Route path="/boudoir" component={Boudoir} />
          <Route path="/diary" component={Diary} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'))
