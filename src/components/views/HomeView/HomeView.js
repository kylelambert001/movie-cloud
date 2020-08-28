import React from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../../animations/variants";
import "./HomeView.scss";

function HomeView(props) {
  return (
    <motion.div
      key="fm-home-view"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariant}
      className="HomeView">
      home view
    </motion.div>
  );
}

export default HomeView;
