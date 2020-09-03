import React from "react";
import { motion } from "framer-motion";

import Rating from "./rating";
import { heroInformationVariant } from "../../animations/variants";
import { truncateStr, getGenres } from "../../utils/helpers";

function HeroInformation(props) {
  const {
    id,
    title,
    name,
    overview,
    vote_average,
    vote_count,
    release_date,
    genre_ids,
    first_air_date,
  } = props.data;

  const { mediaType } = props;

  const movieJSX = () => (
    <>
      <h1 className="hero-information-head">{title ? title : "No Title"}</h1>
      <Rating voteAverage={vote_average} voteCount={vote_count} />
      <div className="hero-information-meta">
        <span className="hero-information-span">{getGenres(genre_ids)}</span>
        <span className="hero-information-span">{release_date}</span>
      </div>
      <p className="hero-information-overview">
        {overview ? truncateStr(overview, 60) : "No Overview"}
      </p>
    </>
  );

  const showJSX = () => (
    <>
      <h1 className="hero-information-head">{name ? name : "No Title"}</h1>
      <Rating voteAverage={vote_average} voteCount={vote_count} />
      <div className="hero-information-meta">
        <span className="hero-information-span">{getGenres(genre_ids)}</span>
        <span className="hero-information-span">{first_air_date}</span>
      </div>
      <p className="hero-information-overview">
        {overview ? truncateStr(overview, 60) : "No Overview"}
      </p>
    </>
  );

  return (
    <div className="hero-information">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroInformationVariant}>
        {mediaType === "movie" && movieJSX()}
        {mediaType === "tv" && showJSX()}
      </motion.div>
    </div>
  );
}

export default HeroInformation;
