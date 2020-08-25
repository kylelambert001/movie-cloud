import React, { Component } from "react";
import ShowsView from "../views/ShowsView/ShowsView";

class ShowsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ShowsView {...this.state} />;
  }
}

export default ShowsContainer;
