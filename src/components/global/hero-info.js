import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import StarRating from "./star-rating";
import { truncateStr, getGenres, getGenresById } from "../../utils/helpers";

export const variant = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function HeroInfo(props) {
  const { item, mediaType } = props;
  return (
    <div className="hero-info">
      <motion.div initial="hidden" animate="visible" variants={variant}>
        {mediaType === "movie" && <MovieInfo item={item} />}
        {mediaType === "tv" && <ShowInfo item={item} />}
      </motion.div>
    </div>
  );
}

export default HeroInfo;

function MovieInfo(props) {
  const { item } = props;
  return (
    <>
      <h1 className="hero-info-head">
        <Link to={`/movie/${item.id}`}>{item.title || "No Title"}</Link>
      </h1>
      <div className="hero-info-meta">
        <div className="hero-info-rating">
          <StarRating
            rating={item.vote_average ? item.vote_average / 2 : 0}
            dimensions="22px"
            spacings="3px"
            emptyColors="#1c222e"
          />
        </div>
        <span className="hero-info-span">{`${item.vote_count} Reviews`}</span>
        {item.genres && (
          <span className="hero-info-span">{getGenres(item.genres)}</span>
        )}
        {item.genre_ids && (
          <span className="hero-info-span">
            {getGenresById(item.genre_ids)}
          </span>
        )}
      </div>
      {item.overview && (
        <p className="hero-info-overview">{truncateStr(item.overview, 50)}</p>
      )}
    </>
  );
}

function ShowInfo(props) {
  const { item } = props;
  return (
    <>
      <h1 className="hero-info-head">
        <Link to={`/tv/${item.id}`}>{item.name || "No Name"}</Link>
      </h1>
      <div className="hero-info-meta">
        <div className="hero-info-rating">
          <StarRating
            rating={item.vote_average ? item.vote_average / 2 : 0}
            dimensions="22px"
            spacings="3px"
            emptyColors="#1c222e"
          />
        </div>
        <span className="hero-info-span">{`${item.vote_count} Reviews`}</span>
        {item.genres && (
          <span className="hero-info-span">{getGenres(item.genres)}</span>
        )}
        {item.genre_ids && (
          <span className="hero-info-span">
            {getGenresById(item.genre_ids)}
          </span>
        )}
      </div>
      {item.overview && (
        <p className="hero-info-overview">{truncateStr(item.overview, 50)}</p>
      )}
    </>
  );
}
