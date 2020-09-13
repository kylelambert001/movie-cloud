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

  componentDidUpdate(prevProps) {
    if (this.props.history !== prevProps.history) {
      this.props.resetDetailsReducer();
      this.fetchDetails();
    }
  }

  fetchDetails() {
    const { id, type } = this.props.history.match.params;
    if (type === "movie") this.props.getMovieDetails(id);
    if (type === "tv") this.props.getShowDetails(id);
    if (type === "person") this.props.getPersonDetails(id);
  }

  componentWillUnmount() {
    this.props.resetDetailsReducer();
  }

  render() {
    const { type } = this.props.history.match.params;

    if (this.props.loading) return <Loading />;
    if (this.props.error) return <Error />;
    return <Details data={this.props.data} mediaType={type} />;
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
    getMovieDetails: (id) => dispatch(actions.getMovieDetails(id)),
    getShowDetails: (id) => dispatch(actions.getShowDetails(id)),
    getPersonDetails: (id) => dispatch(actions.getPersonDetails(id)),
    resetDetailsReducer: () => dispatch(actions.resetDetailsReducer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
