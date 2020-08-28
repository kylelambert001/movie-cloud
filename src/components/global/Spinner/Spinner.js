import React from "react";
import { motion } from "framer-motion";
import "./Spinner.scss";

const spinTransition = {
  loop: Infinity,
  duration: 0.75,
  ease: "linear",
};

function Spinner(props) {
  return (
    <div className="Spinner">
      <motion.span
        animate={{ rotate: 360 }}
        transition={spinTransition}
        className="Spinner-circle"></motion.span>
    </div>
  );
}

export default Spinner;
