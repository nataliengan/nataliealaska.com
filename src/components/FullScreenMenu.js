import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FullScreenMenu extends Component {
  render() {
    let fnMenuItemSelected = this.props.onMenuItemSelected;
    return (
      <div className="fullscreen-nav-container">
        <div className="mobile-nav-group">
          <Link to="/people" style={{ textDecoration: 'none' }}>
            <div className="mobile-nav-item" onClick={fnMenuItemSelected}>People</div>
          </Link>
          <Link to="/boudoir" style={{ textDecoration: 'none' }}>
            <div className="mobile-nav-item" onClick={fnMenuItemSelected}>Boudoir</div>
          </Link>
          <Link to="/diary" style={{ textDecoration: 'none' }}>
            <div className="mobile-nav-item" onClick={fnMenuItemSelected}>Diary</div>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <div className="mobile-nav-item" onClick={fnMenuItemSelected}>About</div>
          </Link>
        </div>
      </div>
    );
  }
}
