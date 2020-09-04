import React, { Component } from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../animations/variants";
import { getRandomItem } from "../../utils/helpers";
import Hero from "../global/hero";

class Home extends Component {
  constructor(props) {
    super(props);
    this.randomMovie = getRandomItem(props.home.trendingMovies.data);
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
      </motion.div>
    );
  }
}

export default Home;
