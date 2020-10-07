import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      images: ['https://www.w3schools.com/html/pic_trulli.jpg', 'https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg', 'https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg']
    }
  }

  moveLeft() {
    let nextImage;
    if (this.state.currentImage <= 0) {
      nextImage = this.state.images.length - 1;
    } else {
      nextImage = this.state.currentImage - 1;
    }
    this.setState({
      currentImage: nextImage
    });
  }

  moveRight() {
    let nextImage;
    if (this.state.currentImage >= this.state.images.length - 1) {
      nextImage = 0;
    } else {
      nextImage = this.state.currentImage + 1;
    }
    this.setState({
      currentImage: nextImage
    });
  }

  render() {
    return (
      <div class="image-carousel">
        <div class="PhotoArea">
          <div class="nav left">
            Left
          </div>
          <div class="nav right">
            Right
          </div>
          <div class="fullscreen-button">
            Fullscreen
          </div>
          <div class="photoTracker">
            {this.state.currentImage} of {this.state.images.length}
          </div>
          <div class="image-full">
            <img src={this.state.images[this.state.currentImage]} id="imageUrl"/>
          </div>
        </div>
      </div>
    )
  }
};

export default App;