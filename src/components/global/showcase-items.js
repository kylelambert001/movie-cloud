import React, { PureComponent } from "react";
import Carousel from "./carousel";

class ShowcaseItems extends PureComponent {
  render() {
    const { heading, items, mediaType } = this.props;
    return (
      <div className="showcase-items">
        <h2 className="showcase-items-head">{heading}</h2>
        <Carousel items={items} mediaType={mediaType} />
      </div>
    );
  }
}

export default ShowcaseItems;
