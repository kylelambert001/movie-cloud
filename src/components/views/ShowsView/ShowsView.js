import React from "react";
import { motion } from "framer-motion";

import { pageTransition } from "../../../animations/variants";
import "./ShowsView.scss";

function ShowsView(props) {
  return (
    <motion.div
      key="showsView"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      className="ShowsView">
      Shows
    </motion.div>
  );
}

export default ShowsView;
