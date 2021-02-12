import React, { Component } from "react";

import SearchField from "../global/search-field";
import ResultsList from "../global/results-list";
import SearchMessage from "../global/search-message";
import Loading from "../pages/loading";
import Error from "../pages/error";

import PageTransition from "../layouts/page-transition";

class Search extends Component {
  componentDidMount() {
    document.title = "Search";
  }

  renderSearch() {
    const { data, loading, error } = this.props;
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error />;
    } else {
      if (!data.results) {
        return (
          <SearchMessage
            message="Hi, welcome to MovieCloud's search functionality. Simply start
            typing to search for movies, tv shows or people..."
          />
        );
      } else if (data.results && data.results.length > 0) {
        return <ResultsList results={data.results} />;
      } else {
        return (
          <SearchMessage message="Sorry we couldn't find any results for your search term..." />
        );
      }
    }
  }

  render() {
    const { handleChange } = this.props;
    return (
      <PageTransition>
        <main>
          <SearchField handleChange={handleChange} />
          {this.renderSearch()}
        </main>
      </PageTransition>
    );
  }
}

export default Search;
