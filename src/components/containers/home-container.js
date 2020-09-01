import React, { Component } from "react";
import { connect } from "react-redux";

// import Loading from "../global/Loading/Loading";
// import HomeView from "../views/HomeView/HomeView";
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
    return arr.some((name) => this.props[name].loading);
  }

  render() {
    // const loading = this.isLoading(["trendingMovies", "trendingShows"]);
    // if (loading) return <Loading />;
    // return <HomeView {...this.props} />;
    return <Home />;
  }
}

const mapStateToProps = (state) => {
  return {
    trendingMovies: state.homeReducer.trendingMovies,
    trendingShows: state.homeReducer.trendingShows,
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
