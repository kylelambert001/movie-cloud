import React from "react";
import { motion } from "framer-motion";

import Rating from "./rating";
import { heroInfoVariant } from "../../animations/variants";
import { truncateStr, getGenres } from "../../utils/helpers";

function HeroInfo({ content }) {
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
  } = content;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={heroInfoVariant}
      className="hero-info">
      {title && <h1 className="hero-info-head">{title}</h1>}
      {name && <h1 className="hero-info-head">{name}</h1>}
      <Rating voteAverage={vote_average} voteCount={vote_count} />
      <div className="hero-info-meta">
        <span className="hero-info-span">{getGenres(genre_ids)}</span>
        {release_date && <span className="hero-info-span">{release_date}</span>}
        {first_air_date && (
          <span className="hero-info-span">{first_air_date}</span>
        )}
      </div>
      {overview && (
        <p className="hero-info-overview">{truncateStr(overview, 60)}</p>
      )}
    </motion.div>
  );
}

export default HeroInfo;
