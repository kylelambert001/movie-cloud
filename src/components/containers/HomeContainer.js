import React, { Component } from "react";
import HomeView from "../views/HomeView/HomeView";
import LoadingView from "../views/LoadingView/LoadingView";
import ErrorView from "../views/ErrorView/ErrorView";
import { trendingPromise } from "../../api/promises.js";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {
        loading: true,
        data: null,
        error: null,
      },
      shows: {
        loading: true,
        data: null,
        error: null,
      },
    };
  }

  componentDidMount() {
    this.getTrendingMovies();
    this.getTrendingShows();
  }

  getTrendingMovies() {
    trendingPromise("movie")
      .then((data) => {
        setTimeout(() => {
          const state = this.state;
          state.movies.loading = false;
          state.movies.data = data.data;
          this.setState(state);
        }, 2000);
      })
      .catch((error) => {
        const state = this.state;
        state.movies.loading = false;
        state.movies.error = error;
        this.setState(state);
      });
  }

  getTrendingShows() {
    trendingPromise("tv")
      .then((data) => {
        const state = this.state;
        state.shows.loading = false;
        state.shows.data = data.data;
        this.setState(state);
      })
      .catch((error) => {
        const state = this.state;
        state.shows.loading = false;
        state.shows.error = error;
        this.setState(state);
      });
  }

  isLoading = () => {
    return this.state.movies.loading || this.state.shows.loading;
  };

  isError = () => {
    return this.state.movies.error || this.state.shows.error;
  };

  render() {
    if (this.isLoading()) return <LoadingView />;
    if (this.isError()) return <ErrorView />;
    return <HomeView {...this.state} />;
  }
}

export default HomeContainer;
