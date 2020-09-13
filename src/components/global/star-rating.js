import React, { Component } from "react";
import Ratings from "react-ratings-declarative";

class StarRating extends Component {
  render() {
    const { rating, dimensions, spacings, emptyColors } = this.props;

    return (
      <Ratings
        rating={rating || 0}
        widgetRatedColors="#24baef"
        widgetEmptyColors={emptyColors || "#949cb0"}
        widgetDimensions={dimensions || "15px"}
        widgetSpacings={spacings || "2px"}>
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
    );
  }
}

export default StarRating;
