import React, { Component } from 'react';
import ImageTile from './image_tile';
import _ from 'lodash';

export default class Gallery extends Component {

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
        <ImageTile key={image} imageName={image} />
      );
    });
  }

  render() {
    let sortedImage = this.sortImage();

    return (
      <div>
        <div className="gallery-top"></div>
          <div className="gallery-container">
            <div className="gallery-row">
              <div className="gallery-column">
                { this.renderImagesInColumn(sortedImage.row1) }
              </div>
              <div className="gallery-column">
                { this.renderImagesInColumn(sortedImage.row2) }
              </div>
          </div>
        </div>
      </div>
    );
  }
}
