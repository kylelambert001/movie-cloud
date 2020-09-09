import React, { Component } from "react";
import { connect } from "react-redux";

import LoadingSpinner from "../global/loading-spinner";
import Details from "../pages/details";
import * as actions from "../../store/actions/detailsActions";

class DetailsContainer extends Component {
  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails() {
    const { mediaType, contentId } = this.props;
    if (mediaType === "movie") this.props.getMovieDetails(contentId);
    if (mediaType === "tv") this.props.getShowDetails(contentId);
    if (mediaType === "person") console.log("fetch person details");
  }

  componentWillUnmount() {
    this.props.resetDetailsReducer();
  }

  render() {
    const { loading, error, data } = this.props.details;

    if (loading) return <LoadingSpinner />;
    if (error) return <div>error</div>;
    return (
      <Details details={this.props.details} mediaType={this.props.mediaType} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.detailsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetails: (contentId) =>
      dispatch(actions.getMovieDetails(contentId)),
    getShowDetails: (contentId) => dispatch(actions.getShowDetails(contentId)),
    resetDetailsReducer: () => dispatch(actions.resetDetailsReducer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
