import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';

import NavBar from './navbar';
import Home from './home';
import People from './people';
import Boudoir from './boudoir';
import Diary from './diary';
import About from './about';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: window.innerWidth < 650 };
    this.throttledHandleWindowResize = this.throttledHandleWindowResize.bind(this);
  }

  throttledHandleWindowResize = () => {
      this.setState({ isMobile: window.innerWidth < 650 });
  }

  componentDidMount() {
    window.addEventListener('resize', this.throttledHandleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.throttledHandleWindowResize);
  }

  render() {
    return (
      <div>
        <NavBar isMobile={this.state.isMobile} />
        <Switch>
          <Route path="/people" component={People} />
          <Route path="/boudoir" component={Boudoir} />
          <Route path="/diary" component={Diary} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
