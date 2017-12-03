import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';

export default class App extends Component {
    render () {
        return (
          // <nav className="navbar navbar-fixed-top">
          //   <div className="container-fluid">
          //     <Header />
          //     <NavBar />
          //   </div>
          // </nav>
          <div>
            <Header />
            <Menu />
          </div>
        );
    }
}
