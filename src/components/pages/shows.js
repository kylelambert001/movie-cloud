import React, { Component } from "react";

import Hero from "../global/hero";
import ShowcaseItems from "../global/showcase-items";
import Footer from "../global/footer";
import PageLayout from "../layouts/page-layout";

import { guardArray } from "../../utils/guards";

class Shows extends Component {
  componentDidMount() {
    document.title = "TV Shows";
  }

  render() {
    const {
      popularShows,
      topRatedShows,
      airingTodayShows,
      onTheAirShows,
    } = this.props;
    return (
      <PageLayout>
        <main>
          {guardArray(popularShows.data) && (
            <Hero item={popularShows.data[0]} mediaType="tv" />
          )}
          <section>
            {guardArray(popularShows.data) && (
              <ShowcaseItems
                heading="Popular TV Shows"
                items={popularShows.data}
                mediaType="tv"
              />
            )}
            {guardArray(topRatedShows.data) && (
              <ShowcaseItems
                heading="Top Rated TV Shows"
                items={topRatedShows.data}
                mediaType="tv"
              />
            )}
            {guardArray(airingTodayShows.data) && (
              <ShowcaseItems
                heading="TV Shows Airing Today"
                items={airingTodayShows.data}
                mediaType="tv"
              />
            )}
            {guardArray(onTheAirShows.data) && (
              <ShowcaseItems
                heading="TV Shows Currently Showing"
                items={onTheAirShows.data}
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

export default Shows;
