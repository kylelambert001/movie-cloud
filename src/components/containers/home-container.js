import React, { Component } from "react";
import { connect } from "react-redux";

import Home from "../pages/home";
import Loading from "../pages/loading";
import Error from "../pages/error";

import * as actions from "../../store/actions/homeActions";
import { isLoading, isError } from "../../utils/helpers";

const categories = ["trendingMovies", "trendingShows"];

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.isLoading = isLoading.bind(this);
    this.isError = isError.bind(this);
  }

  componentDidMount() {
    this.props.getTrendingMovies();
    this.props.getTrendingShows();
  }

  componentWillUnmount() {
    this.props.resetHomeReducer();
  }

  render() {
    if (this.isLoading(categories)) return <Loading />;
    if (this.isError(categories)) return <Error />;
    return (
      <Home
        trendingMovies={this.props.trendingMovies}
        trendingShows={this.props.trendingShows}
      />
    );
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
