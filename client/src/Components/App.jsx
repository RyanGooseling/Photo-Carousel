import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 1,
      images: []
    }
  }

  moveLeft() {
    let nextImage;
    if (this.state.currentImage === 1) {
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
    if (thist.state.currentImage === this.state.images.length) {
      nextImage = 1;
    } else {
      nextImage = this.state.currentImage + 1;
    }
    this.setState({
      currentImage: nextImage
    });
  }

  render() {
    return (
      <div className="image-carousel">
        <div className="buttons">
          <div className="left-button">
            Left
          </div>
          <div className="right-button">
            Right
          </div>
          <div className="fullscreen-button">
            Fullscreen
          </div>
          <div className="photoTracker">
            {this.state.currentImage} of {this.state.images.length}
          </div>
        </div>
        <div className="image-full">
          <img src="pic_trulli.jpg"/>
        </div>
      </div>
    )
  }
};

export default App;