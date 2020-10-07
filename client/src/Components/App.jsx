import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 1,
      images: ['https://www.w3schools.com/html/pic_trulli.jpg', 'https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg', 'https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg']
    }
  }

  moveLeft() {
    this.setState({
      currentImage: this.state.currentImage <= 1 ? this.state.images.length : this.state.currentImage - 1
    });
  }

  moveRight() {
    this.setState({
      currentImage: this.state.currentImage >= this.state.images.length ? 1 : this.state.currentImage + 1
    });
  }

  render() {
    return (
      <div class="image-carousel">
        <div class="fullscreen-button"/>
        <div class="PhotoArea">
          <div class="nav prev" onClick={e => this.moveLeft()}>
            <div class="navButton"/>
          </div>
          <div class="nav next" onClick={e => this.moveRight()}>
            <div class="navButton"/>
          </div>
          <div id="photoTracker">
            {this.state.currentImage + ' of ' + this.state.images.length}
          </div>
          <div class="image-full">
            <img src={this.state.images[this.state.currentImage - 1]} id="imageUrl"/>
          </div>
        </div>
      </div>
    )
  }
};

export default App;