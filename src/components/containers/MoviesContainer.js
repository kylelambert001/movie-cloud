import React, { Component } from "react";
import { connect } from "react-redux";

import Loading from "../global/Loading/Loading";

import * as actions from "../../store/actions/moviesActions";
import { isLoading } from "../../utils/helpers";

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNowPlayingMovies();
    this.props.getPopularMovies();
    this.props.getTopRatedMovies();
    setTimeout(() => {
      this.props.getUpcomingMovies();
    }, 1500);
  }

  componentWillUnmount() {
    this.props.resetMoviesReducer();
  }

  render() {
    if (isLoading(this.props.moviesReducer)) return <Loading />;
    return <div>movie view</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    moviesReducer: state.moviesReducer,
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
