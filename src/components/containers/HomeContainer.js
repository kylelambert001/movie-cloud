import React, { Component } from "react";
import HomeView from "../views/HomeView/HomeView";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <HomeView {...this.state} />;
  }
}

export default HomeContainer;
