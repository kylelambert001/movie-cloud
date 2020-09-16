import React, { PureComponent } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import Card from "../global/card";

class ResultsList extends PureComponent {
  render() {
    const { results, query } = this.props;
    return (
      <section className="results-list">
        {query && <h2 className="results-list-head">Results for: {query}</h2>}
        {results && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="results-list-grid">
            {results.map((result) => (
              <Card
                key={uuidv4()}
                item={result}
                mediaType={result.media_type}
              />
            ))}
          </motion.div>
        )}
      </section>
    );
  }
}

export default ResultsList;
