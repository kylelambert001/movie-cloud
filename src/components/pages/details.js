import React, { Component } from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../animations/variants";
import Hero from "../global/hero";
import Footer from "../global/footer";

class Details extends Component {
  heroShouldRender() {
    const { mediaType } = this.props;
    if (mediaType === "movie" || mediaType === "tv") return true;
    return false;
  }

  render() {
    const { details, mediaType } = this.props;
    return (
      <motion.div initial="hidden" animate="visible" variants={pageVariant}>
        {/* {this.heroShouldRender && ( */}
        <Hero data={details.data} mediaType={mediaType} />
        {/* )} */}
        <Footer />
      </motion.div>
    );
  }
}

export default Details;
