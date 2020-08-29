import React, { Component } from "react";
import { connect } from "react-redux";

import HomeView from "../views/HomeView/HomeView";
import LoadingView from "../views/LoadingView/LoadingView";

import * as actions from "../../store/actions/homeActions";
import { isLoading } from "../../utils/helpers";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTrendingMovies();
    setTimeout(() => {
      this.props.getTrendingShows();
    }, 1500);
  }

  componentWillUnmount() {
    this.props.resetHomeReducer();
  }

  render() {
    if (isLoading(this.props.homeReducer)) return <LoadingView />;
    return <div>home view</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    homeReducer: state.homeReducer,
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
