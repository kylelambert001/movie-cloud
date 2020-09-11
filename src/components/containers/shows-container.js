import React, { Component } from "react";
import { connect } from "react-redux";

import Shows from "../pages/shows";
import Loading from "../pages/loading";
import Error from "../pages/error";

import * as actions from "../../store/actions/showsActions";
import { isLoading, isError } from "../../utils/helpers";

const categories = [
  "popularShows",
  "topRatedShows",
  "airingTodayShows",
  "onTheAirShows",
];

class ShowsContainer extends Component {
  constructor(props) {
    super(props);
    this.isLoading = isLoading.bind(this);
    this.isError = isError.bind(this);
  }

  componentDidMount() {
    this.props.getPopularShows();
    this.props.getTopRatedShows();
    this.props.getAiringTodayShows();
    this.props.getOnTheAirShows();
  }

  componentWillUnmount() {
    this.props.resetShowsReducer();
  }

  render() {
    if (this.isLoading(categories)) return <Loading />;
    if (this.isError(categories)) return <Error />;
    return (
      <Shows
        popularShows={this.props.popularShows}
        topRatedShows={this.props.topRatedShows}
        airingTodayShows={this.props.airingTodayShows}
        onTheAirShows={this.props.onTheAirShows}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularShows: state.showsReducer.popularShows,
    topRatedShows: state.showsReducer.topRatedShows,
    airingTodayShows: state.showsReducer.airingTodayShows,
    onTheAirShows: state.showsReducer.onTheAirShows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularShows: () => dispatch(actions.getPopularShows()),
    getTopRatedShows: () => dispatch(actions.getTopRatedShows()),
    getAiringTodayShows: () => dispatch(actions.getAiringTodayShows()),
    getOnTheAirShows: () => dispatch(actions.getOnTheAirShows()),
    resetShowsReducer: () => dispatch(actions.resetShowsReducer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowsContainer);
