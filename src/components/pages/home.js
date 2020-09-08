import React, { Component } from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../animations/variants";
import { getRandomItem } from "../../utils/helpers";
import Hero from "../global/hero";
import ShowcaseItems from "../global/showcase-items";

class Home extends Component {
  constructor(props) {
    super(props);
    this.randomMovie = getRandomItem(props.home.trendingMovies.data);
  }

  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
      <motion.div
        key="fm-home"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={pageVariant}
        className="home">
        <Hero data={this.randomMovie} mediaType="movie" />
        <ShowcaseItems
          heading="Trending Movies"
          itemsArray={this.props.home.trendingMovies.data}
          mediaType="movie"
        />
        <ShowcaseItems
          heading="Trending Shows"
          itemsArray={this.props.home.trendingShows.data}
          mediaType="tv"
        />
      </motion.div>
    );
  }
}

export default Home;
