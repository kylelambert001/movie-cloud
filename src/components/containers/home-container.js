import React, { Component } from "react";
import { connect } from "react-redux";

import LoadingSpinner from "../global/loading-spinner";
import Home from "../pages/home";

import * as actions from "../../store/actions/homeActions";

const listTypes = ["trendingMovies", "trendingShows"];

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getTrendingMovies();
    this.props.getTrendingShows();
  }

  componentWillUnmount() {
    this.props.resetHomeReducer();
  }

  isLoading() {
    return listTypes.some((name) => this.props.home[name].loading);
  }

  render() {
    if (this.isLoading()) return <LoadingSpinner />;
    return <Home home={this.props.home} />;
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
