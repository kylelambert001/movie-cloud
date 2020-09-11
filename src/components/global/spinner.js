import React from "react";
import { motion } from "framer-motion";

const spinTransition = {
  loop: Infinity,
  duration: 0.75,
  ease: "linear",
};

function Spinner(props) {
  return (
    <div className="spinner">
      <motion.span
        animate={{ rotate: 360 }}
        transition={spinTransition}
        className="spinner-circle"></motion.span>
    </div>
  );
}

export default Spinner;
