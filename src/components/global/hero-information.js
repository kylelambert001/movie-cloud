import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import StarRating from "./star-rating";
import { heroInformationVariant } from "../../animations/variants";
import { truncateStr, findGenreNames } from "../../utils/helpers";

function HeroInformation(props) {
  const {
    id,
    title,
    name,
    overview,
    vote_average = 0,
    vote_count = 0,
    release_date,
    genre_ids,
    genres,
    first_air_date,
  } = props.data;
  const { mediaType } = props;

  const getYear = (date) => {
    if (typeof date !== "string") return "No Date";
    return date.slice(0, 4);
  };

  const renderGenres = () => {
    if (genre_ids) return findGenreNames(genre_ids);
    if (genres)
      return genres
        .map((genre) => genre.name)
        .slice(0, 3)
        .join(", ");
    return "No Genres";
  };

  const linkPath = `/details/${mediaType}/${id}`;

  const movieJSX = () => (
    <>
      <h1 className="hero-information-head">
        <Link to={linkPath}>{title}</Link>
      </h1>
      <div className="hero-information-meta">
        <div className="hero-information-rating">
          <StarRating
            rating={vote_average / 2}
            dimensions="22px"
            spacings="3px"
            emptyColors="#1c222e"
          />
        </div>
        <span className="hero-information-span">{`${vote_count} Reviews`}</span>
        <span className="hero-information-span">{renderGenres()}</span>
        {release_date && (
          <span className="hero-information-span">{getYear(release_date)}</span>
        )}
      </div>
      <p className="hero-information-overview">
        {overview ? truncateStr(overview, 55) : "No Overview"}
      </p>
    </>
  );

  const showJSX = () => (
    <>
      <h1 className="hero-information-head">
        <Link to={linkPath}>{name}</Link>
      </h1>
      <div className="hero-information-meta">
        <div className="hero-information-rating">
          <StarRating
            rating={vote_average / 2}
            dimensions="22px"
            spacings="3px"
            emptyColors="#1c222e"
          />
        </div>
        <span className="hero-information-span">{`${vote_count} Reviews`}</span>
        <span className="hero-information-span">{renderGenres()}</span>
        {first_air_date && (
          <span className="hero-information-span">
            {getYear(first_air_date)}
          </span>
        )}
      </div>
      <p className="hero-information-overview">
        {overview ? truncateStr(overview, 55) : "No Overview"}
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
