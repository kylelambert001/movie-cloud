import React, { Component } from "react";
import { connect } from "react-redux";

import Movies from "../pages/movies";
import LoadingSpinner from "../global/loading-spinner";
import * as actions from "../../store/actions/moviesActions";

const listTypes = [
  "popularMovies",
  "nowPlayingMovies",
  "topRatedMovies",
  "upcomingMovies",
];

class MoviesContainer extends Component {
  componentDidMount() {
    this.props.getNowPlayingMovies();
    this.props.getPopularMovies();
    this.props.getTopRatedMovies();
    this.props.getUpcomingMovies();
  }

  componentWillUnmount() {
    this.props.resetMoviesReducer();
  }

  isLoading() {
    return listTypes.some((name) => this.props.movies[name].loading);
  }

  render() {
    if (this.isLoading()) return <LoadingSpinner />;
    return <Movies movies={this.props.movies} />;
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer,
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
