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
      <div id="sam">
        <div class="sam-image-carousel">
          <div class="sam-fullscreen-button"/>
          <div class="sam-PhotoArea">
            <div class="sam-nav sam-prev" onClick={e => this.moveLeft()}>
              <div class="sam-navButton"/>
            </div>

            <div class="sam-nav sam-next" onClick={e => this.moveRight()}>
              <div class="sam-navButton"/>
            </div>

            <div id="sam-photoTracker">
              {this.state.currentImage + ' of ' + this.state.images.length}
            </div>

            <div class="sam-image-full">
              <img src={this.state.images[this.state.currentImage - 1]} id="sam-imageUrl"/>
            </div>
          </div>
        </div>

        <div class="sam-bottom-banner">
          <div class="sam-card" id="sam-album">
            <div class="sam-cardv2">
              <img class="sam-card-image" src={this.state.images[0]}/>
              <div class="sam-center">
                <span class="sam-bottom-word">{this.state.images.length} Photos</span>
              </div>
            </div>
          </div>

          <div class="sam-card" id="sam-3d-walkthrough">
            <div class="sam-cardv2">
              <img class="sam-card-image" src="https://mightyvisage.co.uk/wp-content/uploads/2019/04/animation-play-button.jpg"/>
              <div class="sam-center">
                <span class="sam-bottom-word">3D Walkthrough</span>
              </div>
            </div>
          </div>

          <div class="sam-card" id="sam-street-view">
            <div class="sam-cardv2">
              <img class="sam-card-image" src="https://cdn.images.express.co.uk/img/dynamic/25/590x/Google-Maps-Street-View-Wayne-s-World-961777.jpg"/>
              <div class="sam-center">
                <span class="sam-bottom-word">Street View</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
};

export default App;