import React, { Component } from "react";
import { connect } from "react-redux";

import Movies from "../pages/movies";
import Loading from "../pages/loading";
import Error from "../pages/error";

import * as actions from "../../store/actions/moviesActions";
import { isLoading, isError } from "../../utils/helpers";

const categories = [
  "popularMovies",
  "nowPlayingMovies",
  "topRatedMovies",
  "upcomingMovies",
];

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.isLoading = isLoading.bind(this);
    this.isError = isError.bind(this);
  }

  componentDidMount() {
    this.props.getNowPlayingMovies();
    this.props.getPopularMovies();
    this.props.getTopRatedMovies();
    this.props.getUpcomingMovies();
  }

  componentWillUnmount() {
    this.props.resetMoviesReducer();
  }

  render() {
    if (this.isLoading(categories)) return <Loading />;
    if (this.isError(categories)) return <Error />;
    return (
      <Movies
        popularMovies={this.props.popularMovies}
        topRatedMovies={this.props.topRatedMovies}
        nowPlayingMovies={this.props.nowPlayingMovies}
        upcomingMovies={this.props.upcomingMovies}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularMovies: state.moviesReducer.popularMovies,
    topRatedMovies: state.moviesReducer.topRatedMovies,
    nowPlayingMovies: state.moviesReducer.nowPlayingMovies,
    upcomingMovies: state.moviesReducer.upcomingMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularMovies: () => dispatch(actions.getPopularMovies()),
    getNowPlayingMovies: () => dispatch(actions.getNowPlayingMovies()),
    getTopRatedMovies: () => dispatch(actions.getTopRatedMovies()),
    getUpcomingMovies: () => dispatch(actions.getUpcomingMovies()),
    resetMoviesReducer: () => dispatch(actions.resetMoviesReducer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
