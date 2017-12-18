import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deselectImage } from '../actions/deselect_image';
import { bindActionCreators } from 'redux';

class LightBox extends Component {
  render() {
    return (
        <div
          className="lightbox-background"
          onClick={() => this.props.deselectImage()}>
          <img src={ require(`../../assets/${this.props.imageName}`) } />
          <i
            className="fa fa-times fa-3x menu-item lightbox-cancel-btn"
            aria-hidden="true"
            onClick={() => this.props.deselectImage()}></i>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deselectImage: deselectImage}, dispatch);
}

export default connect(null, mapDispatchToProps)(LightBox);
