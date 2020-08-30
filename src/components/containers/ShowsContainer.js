import React, { Component } from "react";
import { connect } from "react-redux";

import Loading from "../global/Loading/Loading";
import ShowsView from "../views/ShowsView/ShowsView";
import * as actions from "../../store/actions/showsActions";

class ShowsContainer extends Component {
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
    return arr.some((name) => this.props[name].loading);
  }

  render() {
    const loading = this.isLoading(["popularShows", "topRatedShows"]);
    if (loading) return <Loading />;
    return <ShowsView />;
  }
}

const mapStateToProps = (state) => {
  return {
    popularShows: state.showsReducer.popularShows,
    topRatedShows: state.showsReducer.topRatedShows,
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
