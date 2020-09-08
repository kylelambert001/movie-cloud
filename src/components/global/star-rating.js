import React, { Component } from "react";
import Ratings from "react-ratings-declarative";

class StarRating extends Component {
  render() {
    const {
      rating = 0,
      dimensions = "15px",
      spacings = "2px",
      emptyColors = "#949cb0",
    } = this.props;

    return (
      <Ratings
        rating={rating}
        widgetRatedColors="#24baef"
        widgetEmptyColors={emptyColors}
        widgetDimensions={dimensions}
        widgetSpacings={spacings}>
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
