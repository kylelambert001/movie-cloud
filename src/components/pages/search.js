import React, { Component } from "react";

import SearchField from "../global/search-field";
import ResultsList from "../global/results-list";
import Loading from "../pages/loading";

import PageTransition from "../layouts/page-transition";

class Search extends Component {
  componentDidMount() {
    document.title = "Search";
  }

  render() {
    const { data, loading, query, handleChange } = this.props;
    return (
      <PageTransition>
        <main>
          <SearchField handleChange={handleChange} query={query} />
          <ResultsList results={data.results} query={query} />
          {loading && <Loading />}
        </main>
      </PageTransition>
    );
  }
}

export default Search;
