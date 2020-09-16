import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/searchActions";
import Search from "../pages/search";

import { debounce } from "../../utils/helpers";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      query: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  fetchResultsDebounce = debounce(() => {
    const { query, page } = this.state;
    if (query) {
      this.props.getSearchResults(query, page);
      console.log("Fetched: " + query);
    }
  }, 500);

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      if (this.state.query) {
        this.fetchResultsDebounce();
      }
    }
  }

  componentWillUnmount() {
    this.props.resetSearchReducer();
  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    });
    // this.props.resetSearchReducer();
  }

  render() {
    return (
      <Search
        data={this.props.data}
        query={this.state.query}
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
