import React from "react";
import { motion } from "framer-motion";

import { pageTransition } from "../../../animations/variants";
import "./ErrorView.scss";

function ErrorView(props) {
  return (
    <motion.div
      key="errorView"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      className="ErrorView">
      Error
    </motion.div>
  );
}

export default ErrorView;
