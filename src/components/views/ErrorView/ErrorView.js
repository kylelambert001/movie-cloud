import React from "react";
import { motion } from "framer-motion";
import { pageVariant } from "../../../animations/variants";
import "./ErrorView.scss";

function ErrorView(props) {
  return (
    <motion.div
      key="fm-error-view"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariant}
      className="ErrorView">
      <div>error</div>
    </motion.div>
  );
}

export default ErrorView;
