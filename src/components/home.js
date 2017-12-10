import React, { Component } from 'react';
import backgroundImage1 from '../../assets/nataliealaska-home1.jpg';
import backgroundImage2 from '../../assets/nataliealaska-home2.jpg';
import backgroundImage3 from '../../assets/nataliealaska-home3.jpg';
import backgroundImage4 from '../../assets/nataliealaska-home4.jpg';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state={
      imageIndex: 0
    }
  }

  componentDidMount() {
      setInterval(() => {
        let newIndex = (this.state.imageIndex + 1) % 4;
        this.setState({ imageIndex: newIndex });
      }, 5000);
  }

  render() {
    const backgroundImages = [
      backgroundImage1,
      backgroundImage2,
      backgroundImage3,
      backgroundImage4
    ]

    return (
      <div className="home-bg-wrap">
        <img className="home-bg" src={ backgroundImages[this.state.imageIndex] }></img>
      </div>
    );
  }
}
