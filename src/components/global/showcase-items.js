import React, { PureComponent } from "react";
import { motion } from "framer-motion";
import Carousel from "./carousel";

const variant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

class ShowcaseItems extends PureComponent {
  render() {
    const { heading, items, mediaType } = this.props;
    return (
      <div className="showcase-items">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variant}
          className="showcase-items-head">
          {heading}
        </motion.h2>
        <Carousel items={items} mediaType={mediaType} />
      </div>
    );
  }
}

export default ShowcaseItems;
