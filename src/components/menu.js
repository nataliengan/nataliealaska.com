import React, { Component } from 'react';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = { isMenuOpen: false};
  }

  toggleMenu() {
    alert("hello!");
    if (this.state.isMenuOpen) {
      this.setState({isMenuOpen: false});
    } else {
      this.setState({isMenuOpen: true});
    }
  }

  render () {
      return (
        <div onClick={this.toggleMenu} className="menu">
          <i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
        </div>
      );
  }
}
