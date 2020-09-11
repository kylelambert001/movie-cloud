import React, { Component } from "react";
import { connect } from "react-redux";

import Details from "../pages/details";
import Loading from "../pages/loading";
import Error from "../pages/error";

import * as actions from "../../store/actions/detailsActions";

class DetailsContainer extends Component {
  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails() {
    const { mediaType, itemId } = this.props;
    if (mediaType === "movie") this.props.getMovieDetails(itemId);
    if (mediaType === "tv") this.props.getShowDetails(itemId);
  }

  componentWillUnmount() {
    this.props.resetDetailsReducer();
  }

  render() {
    // const { loading, error, data } = this.props.details;

    // if (loading) return <LoadingSpinner />;
    // if (error) return <div>error</div>;
    // return (
    //   <Details details={this.props.details} mediaType={this.props.mediaType} />
    // );
    if (this.props.loading) return <Loading />;
    if (this.props.error) return <Error />;
    return <Details data={this.props.data} mediaType={this.props.mediaType} />;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.detailsReducer.data,
    loading: state.detailsReducer.loading,
    error: state.detailsReducer.error,
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
