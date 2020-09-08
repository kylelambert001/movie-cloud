import React from "react";
import Carousel from "./carousel";

function ShowcaseItems(props) {
  const { heading = "Title", itemsArray, mediaType } = props;
  return (
    <div className="showcase-items">
      <h2 className="showcase-items-head">{heading}</h2>
      <Carousel itemsArray={itemsArray} mediaType={mediaType} />
    </div>
  );
}

export default ShowcaseItems;
