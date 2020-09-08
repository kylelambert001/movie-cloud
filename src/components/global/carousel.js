import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./card";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.carouselItems = React.createRef();
  }

  render() {
    const { itemsArray, mediaType } = this.props;
    return (
      <div className="carousel">
        {/* <button className="carousel-prev">&#9664;</button>
        <button className="carousel-next">&#9658;</button> */}
        <div ref={this.carouselItems} className="carousel-items">
          {itemsArray.map((item) => (
            <Card key={uuidv4()} data={item} mediaType={mediaType} />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
