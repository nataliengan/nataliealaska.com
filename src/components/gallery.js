import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ImageTile from './ImageTile';
import LightBox from './LightBox';

class Gallery extends Component {

  /* Divides images into three
    arrangement of images is left-to-right, top-to-bottom
  */
  sortImage() {
    let rowPointer = 0;
    let row1 = new Array();
    let row2 = new Array();

    for (let i = 0; i < this.props.imageNames.length; i++) {
      let currentImage = this.props.imageNames[i];
      if (i % 2 === 0) {
        row1.push(currentImage);
      } else if (i % 2 === 1) {
        row2.push(currentImage);
      }
    }
    return { row1, row2 };
  }

  renderImagesInColumn(images) {
    return _.map(images, image => {
      return (
        <ImageTile
          key={image}
          imageName={image} />
      );
    });
  }

  getLightBox(activeImageName) {
    if (activeImageName) {
      return <LightBox imageName={activeImageName} />;
    }
  }

  render() {
    let sortedImages = this.sortImage();
    let activeImageName = this.props.activeImage;
    let lightBox = this.getLightBox(activeImageName);

    return (
      <div>
        {lightBox}
        <div className="gallery-top"></div>
          <div className="gallery-container">
            <div className="gallery-row">
              <div className="gallery-column">
                { this.renderImagesInColumn(sortedImages.row1) }
              </div>
              <div className="gallery-column">
                { this.renderImagesInColumn(sortedImages.row2) }
              </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeImage: state.activeImage
  }
}

export default connect(mapStateToProps)(Gallery);
