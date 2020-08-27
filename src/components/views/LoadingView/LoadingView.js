import React from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../../animations/variants";
import "./LoadingView.scss";

function LoadingView(props) {
  return (
    <motion.div
      key="fm-loading-view"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariant}
      className="LoadingView">
      <div>loading......</div>
    </motion.div>
  );
}

export default LoadingView;
