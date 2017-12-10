import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FullScreenMenu extends Component {
  render() {
    return (
      <div className="fullscreen-nav-container">
        <div className="mobile-nav-group">
          <Link to="/people" style={{ textDecoration: 'none' }}>
            <div className="mobile-nav-item">People</div>
          </Link>
          <Link to="/boudoir" style={{ textDecoration: 'none' }}>
            <div className="mobile-nav-item">Boudoir</div>
          </Link>
          <Link to="/diary" style={{ textDecoration: 'none' }}>
            <div className="mobile-nav-item">Diary</div>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <div className="mobile-nav-item">About</div>
          </Link>
        </div>
      </div>
    );
  }
}
