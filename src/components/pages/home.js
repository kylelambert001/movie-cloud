import React, { Component } from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../animations/variants";
import { getRandomItem } from "../../utils/helpers";
import Hero from "../global/hero";

class Home extends Component {
  render() {
    const { results } = this.props.trendingMovies.data;
    const randomMovie = getRandomItem(results);
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariant}
        className="home">
        <Hero content={randomMovie} />
      </motion.div>
    );
  }
}

export default Home;
