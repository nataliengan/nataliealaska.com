import React, { Component } from 'react';

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
    if (isNavigationOpen) {
      return (
        <div className="menuMobile">
          <i className="fa fa-navicon fa-3x menu-item" onClick={this.toggleNavigationState.bind(this)} aria-hidden="true"></i>
        </div>
      );
    } else {
      return (
        <div className="menuMobile">
          <i className="fa fa-navicon fa-3x menu-item" onClick={this.toggleNavigationState.bind(this)} aria-hidden="true"></i>
        </div>
      );
    }
  }
}
