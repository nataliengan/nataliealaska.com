import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';

export default class NavBar extends Component {
    render () {
        return (
          <div>
            <Header />
            <Menu />
          </div>
        );
    }
}
