import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/searchActions";
import Search from "../pages/search";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.resetSearchReducer();
    const query = e.target.value;
    if (query) {
      this.props.getSearchResults(e.target.value);
    }
  }

  render() {
    return (
      <Search
        data={this.props.data}
        loading={this.props.loading}
        error={this.props.error}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.searchReducer.data,
    loading: state.searchReducer.loading,
    error: state.searchReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchResults: (query, page) =>
      dispatch(actions.getSearchResults(query, page)),
    resetSearchReducer: () => dispatch(actions.resetSearchReducer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
