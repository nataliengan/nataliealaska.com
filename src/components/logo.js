import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
    render () {
        return (
          <Link to='/' replace>
    				<h1 className="logo">Natalie Alaska</h1>
          </Link>
        );
    }
}
