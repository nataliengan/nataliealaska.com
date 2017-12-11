import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from './Gallery';

class People extends Component {
  render() {
    return (
      <div className="people-container">
        <Gallery imageNames={this.props.peopleImageNames}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    peopleImageNames: state.peopleImages
  };
}

export default connect(mapStateToProps)(People);
