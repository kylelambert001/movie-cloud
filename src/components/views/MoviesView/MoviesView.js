import React from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../../animations/variants";
import "./MoviesView.scss";

function MoviesView(props) {
  return (
    <motion.div
      key="fm-movies-view"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariant}
      className="MoviesView">
      movies view
    </motion.div>
  );
}

export default MoviesView;
