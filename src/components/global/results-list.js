import React, { PureComponent } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import Card from "../global/card";

const variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: "easeOut",
      duration: 1,
    },
  },
};

class ResultsList extends PureComponent {
  render() {
    const { results } = this.props;
    return (
      <section className="results-list">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variant}
          className="results-list-grid">
          {results.map((result) => (
            <Card key={uuidv4()} item={result} mediaType={result.media_type} />
          ))}
        </motion.div>
      </section>
    );
  }
}

export default ResultsList;
