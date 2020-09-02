import React, { Component } from "react";
import { connect } from "react-redux";

import Shows from "../pages/shows";
import LoadingSpinner from "../global/loading-spinner";
import * as actions from "../../store/actions/showsActions";

class TvShowsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPopularShows();
    this.props.getTopRatedShows();
  }

  componentWillUnmount() {
    this.props.resetShowsReducer();
  }

  isLoading(arr) {
    return arr.some((name) => this.props.shows[name].loading);
  }

  render() {
    const loading = this.isLoading(["popularShows", "topRatedShows"]);
    if (loading) return <LoadingSpinner />;
    return <Shows {...this.props.shows} />;
  }
}

const mapStateToProps = (state) => {
  return {
    shows: state.showsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularShows: () => dispatch(actions.getPopularShows()),
    getTopRatedShows: () => dispatch(actions.getTopRatedShows()),
    resetShowsReducer: () => dispatch(actions.resetShowsReducer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowsContainer);
