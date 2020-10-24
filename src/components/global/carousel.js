import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./card";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.carouselItems = React.createRef();
  }

  render() {
    const { items, mediaType } = this.props;
    return (
      <div className="carousel">
        <div ref={this.carouselItems} className="carousel-items">
          {items.map((item) => (
            <div key={uuidv4()} className="carousel-card">
              <Card item={item} mediaType={mediaType} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
