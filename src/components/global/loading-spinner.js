import React from "react";
import { motion } from "framer-motion";

const spinTransition = {
  loop: Infinity,
  duration: 0.75,
  ease: "linear",
};

function LoadingSpinner(props) {
  return (
    <div className="loading-spinner">
      <motion.span
        animate={{ rotate: 360 }}
        transition={spinTransition}
        className="loading-spinner-circle"></motion.span>
    </div>
  );
}

export default LoadingSpinner;
