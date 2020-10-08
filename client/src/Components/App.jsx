import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 1,
      images: this.props.images
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
      <div>
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
        <div class="bottom-banner">
          <div class="card" id="album">
            <div class="cardv2">
              <img class="card-image" src={this.state.images[0]}/>
              <div class="center">
                <span class="bottom-word">{this.state.images.length} Photos</span>
              </div>
            </div>
          </div>
          <div class="card" id="3d-walkthrough">
            <div class="cardv2">
              <img class="card-image" src="https://cdn.aarp.net/content/dam/aarp/home-and-family/your-home/2018/06/1140-house-inheriting.imgcache.rev68c065601779c5d76b913cf9ec3a977e.jpg"/>
              <div class="center">
                <span class="bottom-word">3D Walkthrough</span>
              </div>
            </div>
          </div>
          <div class="card" id="street-view">
            <div class="cardv2">
              <img class="card-image" src="https://cdnimages.familyhomeplans.com/plans/51997/51997-b600.jpg"/>
              <div class="center">
                <span class="bottom-word">Street View</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default App;