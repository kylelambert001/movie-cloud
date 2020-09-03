import React, { Component } from "react";
import { connect } from "react-redux";
import Shows from "../pages/shows";
import LoadingSpinner from "../global/loading-spinner";
import * as actions from "../../store/actions/showsActions";

const listTypes = ["popularShows", "topRatedShows"];

class ShowsContainer extends Component {
  componentDidMount() {
    this.props.getPopularShows();
    this.props.getTopRatedShows();
  }

  componentWillUnmount() {
    this.props.resetShowsReducer();
  }

  isLoading() {
    return listTypes.some((name) => this.props.shows[name].loading);
  }

  render() {
    if (this.isLoading()) return <LoadingSpinner />;
    return <Shows shows={this.props.shows} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowsContainer);
