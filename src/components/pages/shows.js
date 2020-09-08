import React, { Component } from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../animations/variants";
import { getRandomItem } from "../../utils/helpers";
import Hero from "../global/hero";
import ShowcaseItems from "../global/showcase-items";

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
      <motion.div
        key="fm-shows"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={pageVariant}
        className="shows">
        <Hero data={this.randomShow} mediaType="tv" />
        <section className="shows-showcase">
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
        </section>
      </motion.div>
    );
  }
}

export default Shows;
