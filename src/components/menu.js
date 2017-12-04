import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = { isMenuOpen: false };
  }

  toggleMenuState() {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  render () {
    if (this.state.isMenuOpen) {
      return (
        <div className="menu">
          <Link to="/people" style={{ textDecoration: 'none' }}>
            <div className="menu-item menu-nav-item">People</div>
          </Link>
          <Link to="/boudoir" style={{ textDecoration: 'none' }}>
            <div className="menu-item menu-nav-item">Boudoir</div>
          </Link>
          <Link to="/diary" style={{ textDecoration: 'none' }}>
            <div className="menu-item menu-nav-item">Diary</div>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <div className="menu-item menu-nav-item">About</div>
          </Link>
          <i onClick={this.toggleMenuState.bind(this)} className="fa fa-angle-right fa-3x menu-item" aria-hidden="true"></i>
        </div>
      );
    } else {
      return (
        <div className="menu">
          <i onClick={this.toggleMenuState.bind(this)} className="fa fa-angle-left fa-3x menu-item" aria-hidden="true"></i>
        </div>
      );
    }
  }
}
