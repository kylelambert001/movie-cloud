import React, { Component } from "react";

import Hero from "../global/hero";
import ShowcaseItems from "../global/showcase-items";
import Footer from "../global/footer";

import PageTransition from "../layouts/page-transition";

import { guardArray } from "../../utils/guards";

class Home extends Component {
  render() {
    const { trendingMovies, trendingShows } = this.props;
    return (
      <PageTransition>
        <main>
          {guardArray(trendingMovies.data) && (
            <Hero item={trendingMovies.data[0]} mediaType="movie" />
          )}
          <section>
            {guardArray(trendingMovies.data) && (
              <ShowcaseItems
                heading="Trending Movies"
                items={trendingMovies.data}
                mediaType="movie"
              />
            )}
            {guardArray(trendingShows.data) && (
              <ShowcaseItems
                heading="Trending Shows"
                items={trendingShows.data}
                mediaType="tv"
              />
            )}
          </section>
        </main>
        <Footer />
      </PageTransition>
    );
  }
}

export default Home;
