import React, { Component } from 'react';

import Logo from './Logo';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

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
