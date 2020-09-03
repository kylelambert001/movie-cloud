import React, { Component } from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../animations/variants";
import { getRandomItem } from "../../utils/helpers";
import Hero from "../global/hero";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.randomShow = getRandomItem(props.movies.upcomingMovies.data);
  }
  render() {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariant}
        className="movies">
        <Hero data={this.randomShow} mediaType="movie" />
      </motion.div>
    );
  }
}

export default Movies;
