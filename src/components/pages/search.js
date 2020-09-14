import React, { Component } from "react";

import PageLayout from "../layouts/page-layout";
import SearchField from "../global/search-field";
import Loading from "../pages/loading";
import Error from "../pages/error";

class Search extends Component {
  render() {
    const { data, loading, error, handleChange } = this.props;
    return (
      <PageLayout>
        <main>
          <SearchField handleChange={handleChange} />
          {data.results &&
            data.results.map((result, i) => (
              <div key={i}>{result.name ? result.name : result.title}</div>
            ))}
          ){/* {loading && <Loading />}
          {error && <Error />} */}
        </main>
      </PageLayout>
    );
  }
}

export default Search;
