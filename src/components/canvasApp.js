import React, { Component } from 'react';
import { Stage, Layer, Image } from 'react-konva';

// VERY IMPORTANT NOTES
// at first we will set image state to null
// and then we will set it to native image instanse
// only when image is loaded
class YodaImage extends Component {
  state = {
    image: null
  };
  componentDidMount() {
    const image = new window.Image();
    image.src = 'http://konvajs.github.io/assets/yoda.jpg';
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: image
      });
    };
  }

  render() {
    return <Image image={this.state.image} />;
  }
}

export default class CanvasApp extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <YodaImage />
        </Layer>
      </Stage>
    );
  }
}
