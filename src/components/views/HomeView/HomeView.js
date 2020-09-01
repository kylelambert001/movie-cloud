import React from "react";
import { motion } from "framer-motion";

import Banner from "../../global/Banner/Banner";

import { pageVariant } from "../../../animations/variants";
import "./HomeView.scss";

function HomeView(props) {
  const randomNum = Math.floor(
    Math.random() * props.trendingShows.data.results.length
  );

  const movie = props.trendingShows.data.results[randomNum];
  return (
    <motion.div
      // key="fm-home-view"
      initial="hidden"
      animate="visible"
      // exit="hidden"
      variants={pageVariant}
      className="HomeView">
      <Banner content={movie} />
    </motion.div>
  );
}

export default HomeView;
