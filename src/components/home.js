import React, { Component } from 'react';
import backgroundImage from '../assets/nataliealaska-home2.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="home-bg-wrap">
        <img className="home-bg" src={ backgroundImage }></img>
      </div>
    );
  }
}
