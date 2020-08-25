import React, { Component } from "react";
import HomeView from "../views/HomeView/HomeView";

import { getTrending } from "../../api/promises.js";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    // getTrending("movie")
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // getTrending("tv")
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    return <HomeView {...this.state} />;
  }
}

export default HomeContainer;
