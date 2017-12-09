import React, { Component } from 'react';
import Logo from './logo';
import Menu from './menu';
import MenuMobile from './menu_mobile';

export default class NavBar extends Component {
    render () {
      let isMobile = this.props.isMobile;
      return (
        <div>
          <Logo />
          {
            isMobile? <MenuMobile /> : <Menu />
          }
        </div>
      );
    }
}
