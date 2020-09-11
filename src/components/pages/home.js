import React, { Component } from "react";

import Hero from "../global/hero";
import ShowcaseItems from "../global/showcase-items";
import Footer from "../global/footer";
import PageLayout from "../layouts/page-layout";

import { guardArray } from "../../utils/guards";

class Home extends Component {
  componentDidMount() {
    document.title = "Home";
  }

  render() {
    const { trendingMovies, trendingShows } = this.props;
    return (
      <PageLayout>
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
      </PageLayout>
    );
  }
}

export default Home;
