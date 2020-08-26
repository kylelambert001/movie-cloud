import React, { Component } from "react";
import HomeView from "../views/HomeView/HomeView";

import { getTrendingPromise } from "../../api/promises.js";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesData: null,
      moviesLoading: true,
      moviesError: null,
      showsData: null,
      showsLoading: true,
      showsError: null,
    };
  }

  componentDidMount() {
    this.resolveTrendingPromises();
  }

  resolveTrendingPromises() {
    Promise.all([getTrendingPromise("movie"), getTrendingPromise("tv")])
      .then((data) => {
        setTimeout(() => {
          this.setState({
            ...this.state,
            moviesLoading: false,
            moviesData: data[0],
            showsLoading: false,
            showsData: data[1],
          });
        }, 2000);
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          moviesLoading: false,
          moviesError: error[0],
          showsLoading: false,
          showsError: error[1],
        });
      });
  }

  render() {
    return <HomeView {...this.state} />;
  }
}

export default HomeContainer;
