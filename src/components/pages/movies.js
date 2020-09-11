import React, { Component } from "react";

import PageLayout from "../layouts/page-layout";
import ShowcaseItems from "../global/showcase-items";
import Hero from "../global/hero";
import Footer from "../global/footer";
import { guardArray } from "../../utils/guards";

class Movies extends Component {
  componentDidMount() {
    document.title = "Movies";
  }

  render() {
    const {
      popularMovies,
      topRatedMovies,
      upcomingMovies,
      nowPlayingMovies,
    } = this.props;

    return (
      <PageLayout>
        <main>
          {guardArray(popularMovies.data) && (
            <Hero item={popularMovies.data[0]} mediaType="movie" />
          )}
          <section>
            {guardArray(popularMovies.data) && (
              <ShowcaseItems
                heading="Popular Movies"
                items={popularMovies.data}
                mediaType="movie"
              />
            )}
            {guardArray(topRatedMovies.data) && (
              <ShowcaseItems
                heading="Top Rated Movies"
                items={topRatedMovies.data}
                mediaType="movie"
              />
            )}
            {guardArray(nowPlayingMovies.data) && (
              <ShowcaseItems
                heading="Now Playing Movies"
                items={nowPlayingMovies.data}
                mediaType="movie"
              />
            )}
            {guardArray(upcomingMovies.data) && (
              <ShowcaseItems
                heading="Upcoming Movies"
                items={upcomingMovies.data}
                mediaType="movie"
              />
            )}
          </section>
        </main>
        <Footer />
      </PageLayout>
    );
  }
}

export default Movies;
