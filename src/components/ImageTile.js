import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectImage } from '../actions/select_image';
import { bindActionCreators } from 'redux';

class ImageTile extends Component {
  render() {
    var currImage = this.props.imageName;
    return (
        <img
          src={ require(`../../assets/${currImage}`) }
          onClick={() => this.props.selectImage(currImage)} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectImage: selectImage}, dispatch);
}

export default connect(null, mapDispatchToProps)(ImageTile);
