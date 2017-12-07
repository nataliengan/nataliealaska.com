import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from './gallery';

class Diary extends Component {
  render() {
    return (
      <div className="diary-container">
        <Gallery imageNames={this.props.diaryImageNames}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    diaryImageNames: state.diaryImages
  };
}

export default connect(mapStateToProps)(Diary);
