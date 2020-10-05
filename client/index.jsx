import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 1,
      images: [];
    }
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

ReactDOM.render(<App />, document.getElementById('app'));