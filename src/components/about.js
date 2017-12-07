import React, { Component } from 'react';
import ImageTile from './image_tile';

export default class About extends Component {
  render() {
    const profileImageName = "nataliealaska-me.jpg";

    return (
      <div className="about-container">
        <div className="info-top"></div>
        <div className="row">
          <div className="col-sm-6">
            <img className="img-responsive" src={ require(`../assets/${profileImageName}`) } />
          </div>
          <div className="col-sm-6">
            <div className="info-text">
              Coder by day, photographer by night
              <br/>
              Based in Vancouver, BC
              <br/>
              <br/>
              Instagram: <a href='https://www.instagram.com/nataliealaska/'>@nataliealaska</a>;
              <br/>
              Email: nataliealaskaphotography(at)gmail.com;
            </div>
          </div>
        </div>
      </div>
    );
  }
}
