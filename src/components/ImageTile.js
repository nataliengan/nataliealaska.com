import React, { Component } from 'react';

export default class ImageTile extends Component {
  render() {
    return (
        <img src={ require(`../../assets/${this.props.imageName}`) }></img>
    );
  }
}
