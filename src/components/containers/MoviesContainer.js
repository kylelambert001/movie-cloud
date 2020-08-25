import React, { Component } from "react";
import MoviesView from "../views/MoviesView/MoviesView";

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <MoviesView {...this.state} />;
  }
}

export default MoviesContainer;
