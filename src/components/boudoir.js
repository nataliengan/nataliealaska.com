import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from './Gallery';

class Boudoir extends Component {
  render() {
    return (
      <div className="boudoir-container">
        <Gallery imageNames={this.props.boudoirImageNames}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    boudoirImageNames: state.boudoirImages
  };
}

export default connect(mapStateToProps)(Boudoir);
