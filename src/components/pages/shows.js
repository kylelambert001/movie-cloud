import React, { Component } from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../animations/variants";
import { getRandomItem } from "../../utils/helpers";
import Hero from "../global/hero";

class Shows extends Component {
  render() {
    const { results } = this.props.popularShows.data;
    const randomShow = getRandomItem(results);

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariant}
        className="shows">
        <Hero content={randomShow} />
      </motion.div>
    );
  }
}

export default Shows;
