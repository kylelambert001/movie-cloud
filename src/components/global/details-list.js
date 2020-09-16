import React, { PureComponent } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import Card from "../global/card";

class DetailsList extends PureComponent {
  render() {
    const { heading, results, mediaType } = this.props;
    return (
      <section className="details-list">
        <h2 className="details-list-head">{heading}</h2>
        {results && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="details-list-grid">
            {results.map((result) => (
              <Card key={uuidv4()} item={result} mediaType={mediaType} />
            ))}
          </motion.div>
        )}
      </section>
    );
  }
}

export default DetailsList;
