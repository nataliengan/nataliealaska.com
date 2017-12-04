import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render () {
        return (
          <Link to='/'>
    				<h1 className="logo">Natalie Alaska</h1>
          </Link>
        );
    }
}
