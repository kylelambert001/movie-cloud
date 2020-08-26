import React from "react";
import { motion } from "framer-motion";

import { pageTransition } from "../../../animations/variants";
import "./HomeView.scss";

function HomeView(props) {
  console.log(props);
  return (
    <motion.div
      key="homeView"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      className="HomeView">
      Home
    </motion.div>
  );
}

export default HomeView;
