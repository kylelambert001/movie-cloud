import React, { Component } from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../animations/variants";
import { getRandomItem } from "../../utils/helpers";
import Hero from "../global/hero";

class Movies extends Component {
  render() {
    const { results } = this.props.upcomingMovies.data;
    const randomMovie = getRandomItem(results);
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariant}
        className="movies">
        <Hero content={randomMovie} />
      </motion.div>
    );
  }
}

export default Movies;
