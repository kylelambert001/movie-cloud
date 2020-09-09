import Carousel from "./carousel";

import React, { PureComponent } from "react";

class ShowcaseItems extends PureComponent {
  render() {
    const { heading, itemsArray, mediaType } = this.props;
    return (
      <div className="showcase-items">
        <h2 className="showcase-items-head">{heading}</h2>
        <Carousel itemsArray={itemsArray} mediaType={mediaType} />
      </div>
    );
  }
}

export default ShowcaseItems;
