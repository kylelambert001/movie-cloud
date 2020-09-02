import React, { Component } from "react";
import { connect } from "react-redux";

import LoadingSpinner from "../global/loading-spinner";
import Home from "../pages/home";

import * as actions from "../../store/actions/homeActions";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTrendingMovies();
    this.props.getTrendingShows();
  }

  componentWillUnmount() {
    this.props.resetHomeReducer();
  }

  isLoading(arr) {
    return arr.some((name) => this.props.home[name].loading);
  }

  render() {
    const loading = this.isLoading(["trendingMovies", "trendingShows"]);
    if (loading) return <LoadingSpinner />;
    return <Home {...this.props.home} />;
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.homeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrendingMovies: () => dispatch(actions.getTrendingMovies()),
    getTrendingShows: () => dispatch(actions.getTrendingShows()),
    resetHomeReducer: () => dispatch(actions.resetHomeReducer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
