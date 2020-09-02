import React, { Component } from "react";

import Hero from "../global/hero";

class Home extends Component {
  render() {
    const { trendingMovies, trendingShows } = this.props;
    const content = trendingMovies.data.results[0];
    return (
      <div className="home">
        <Hero content={content} />
      </div>
    );
  }
}

export default Home;
