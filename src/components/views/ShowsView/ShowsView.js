import React from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../../animations/variants";
import "./ShowsView.scss";

function ShowsView(props) {
  return (
    <motion.div
      key="fm-shows-view"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariant}
      className="ShowsView">
      shows view
    </motion.div>
  );
}

export default ShowsView;
