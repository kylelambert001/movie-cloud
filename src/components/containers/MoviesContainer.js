import React, { Component } from "react";
import { connect } from "react-redux";

import Loading from "../global/Loading/Loading";
import MoviesView from "../views/MoviesView/MoviesView";
import * as actions from "../../store/actions/moviesActions";

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
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

  isLoading(arr) {
    return arr.some((name) => this.props[name].loading);
  }

  render() {
    const loading = this.isLoading([
      "popularMovies",
      "nowPlayingMovies",
      "topRatedMovies",
      "upcomingMovies",
    ]);
    if (loading) return <Loading />;
    return <MoviesView />;
  }
}

const mapStateToProps = (state) => {
  return {
    popularMovies: state.moviesReducer.popularMovies,
    nowPlayingMovies: state.moviesReducer.nowPlayingMovies,
    topRatedMovies: state.moviesReducer.topRatedMovies,
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
