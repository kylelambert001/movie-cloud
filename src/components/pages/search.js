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

  render() {
    const { data, loading, handleChange, error } = this.props;
    return (
      <PageTransition>
        <main>
          <SearchField handleChange={handleChange} />
          {data.results && <ResultsList results={data.results} />}
          {loading && <Loading />}
          {error && <Error />}
        </main>
      </PageTransition>
    );
  }
}

export default Search;
