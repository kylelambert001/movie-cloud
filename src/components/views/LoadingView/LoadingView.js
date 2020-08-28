import React from "react";
import { motion } from "framer-motion";

import Spinner from "../../global/Spinner/Spinner";
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
      <div className="LoadingView-inner">
        <Spinner />
      </div>
    </motion.div>
  );
}

export default LoadingView;
