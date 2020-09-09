import React, { Component } from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../animations/variants";
import { getRandomItem } from "../../utils/helpers";
import Hero from "../global/hero";
import ShowcaseItems from "../global/showcase-items";
import Footer from "../global/footer";

class Shows extends Component {
  constructor(props) {
    super(props);
    this.randomShow = getRandomItem(props.shows.popularShows.data);
  }

  componentDidMount() {
    document.title = "TV Shows";
  }

  render() {
    return (
      <motion.div initial="hidden" animate="visible" variants={pageVariant}>
        <Hero data={this.randomShow} mediaType="tv" />
        <section>
          <ShowcaseItems
            heading="Upcoming TV Shows"
            itemsArray={this.props.shows.popularShows.data}
            mediaType="tv"
          />
          <ShowcaseItems
            heading="Top Rated TV Shows"
            itemsArray={this.props.shows.topRatedShows.data}
            mediaType="tv"
          />
          <ShowcaseItems
            heading="TV Shows Airing Today"
            itemsArray={this.props.shows.airingTodayShows.data}
            mediaType="tv"
          />
          <ShowcaseItems
            heading="TV Shows On The Air"
            itemsArray={this.props.shows.onTheAirShows.data}
            mediaType="tv"
          />
        </section>
        <Footer />
      </motion.div>
    );
  }
}

export default Shows;
