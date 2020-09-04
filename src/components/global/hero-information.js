import React from "react";
import { Link } from "react-router-dom";
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

  const getYear = (date) => {
    if (typeof date !== "string") return "No Date";
    return date.slice(0, 4);
  };

  const linkPath = `/details/${mediaType}/${id}`;

  const movieJSX = () => (
    <>
      <h1 className="hero-information-head">
        <Link to={linkPath}>{title}</Link>
      </h1>
      <div className="hero-information-meta">
        <Rating voteAverage={vote_average} voteCount={vote_count} />
        <span className="hero-information-span">{getGenres(genre_ids)}</span>
        <span className="hero-information-span">{getYear(release_date)}</span>
      </div>
      <p className="hero-information-overview">
        {overview ? truncateStr(overview, 60) : "No Overview"}
      </p>
    </>
  );

  const showJSX = () => (
    <>
      <h1 className="hero-information-head">
        <Link to={linkPath}>{name}</Link>
      </h1>
      <div className="hero-information-meta">
        <Rating voteAverage={vote_average} voteCount={vote_count} />
        <span className="hero-information-span">{getGenres(genre_ids)}</span>
        <span className="hero-information-span">{getYear(first_air_date)}</span>
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
