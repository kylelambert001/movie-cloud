import React, { Component } from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../animations/variants";
import { getRandomItem } from "../../utils/helpers";
import Hero from "../global/hero";

class Shows extends Component {
  constructor(props) {
    super(props);
    this.randomShow = getRandomItem(props.shows.popularShows.data);
  }
  render() {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariant}
        className="shows">
        <Hero data={this.randomShow} mediaType="tv" />
      </motion.div>
    );
  }
}

export default Shows;
