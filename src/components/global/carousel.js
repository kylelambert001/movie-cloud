import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./card";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.carouselItems = React.createRef();
  }

  componentDidMount() {
    console.log(this.carouselItems);
  }

  render() {
    const { items, mediaType } = this.props;
    return (
      <div className="carousel">
        <button className="carousel-prev">prev</button>
        <button className="carousel-next">next</button>
        <div ref={this.carouselItems} className="carousel-items">
          {items.map((item) => (
            <Card key={uuidv4()} data={item} mediaType={mediaType} />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
