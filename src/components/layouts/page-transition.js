import React from "react";
import { motion } from "framer-motion";

const variant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function PageTransition(props) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variant}
      className="page-layout">
      {props.children}
    </motion.div>
  );
}

export default PageTransition;
