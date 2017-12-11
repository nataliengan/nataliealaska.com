import React, { Component } from 'react';

import FullScreenMenu from './FullScreenMenu';

export default class MenuMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavigationOpen: false
    };
  }

  toggleNavigationState() {
    this.setState({isNavigationOpen: !this.state.isNavigationOpen})
  }

  render() {
    let isNavigationOpen = this.state.isNavigationOpen;
    console.log(this.state.isNavigationOpen);
    if (isNavigationOpen) {
      return (
        <div className="mobileMenuContainer">
          <FullScreenMenu onMenuItemSelected={this.toggleNavigationState.bind(this)} />
          <div className="mobile-menu-button">
            <i className="fa fa-times fa-3x menu-item" onClick={this.toggleNavigationState.bind(this)} aria-hidden="true"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div className="mobile-menu-button">
          <i className="fa fa-navicon fa-3x menu-item" onClick={this.toggleNavigationState.bind(this)} aria-hidden="true"></i>
        </div>
      );
    }
  }
}
