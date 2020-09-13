import React from "react";
import { Link } from "react-router-dom";

import StarRating from "./star-rating";
import FadeIn from "./fade-in";
import Placeholder from "./placeholder";

function Card(props) {
  const { mediaType, item } = props;

  return (
    <div className="card">
      {mediaType === "movie" && <MovieCard item={item} />}
      {mediaType === "tv" && <ShowCard item={item} />}
      {mediaType === "person" && <PersonCard item={item} />}
    </div>
  );
}

export default Card;

function MovieCard(props) {
  const { item } = props;
  return (
    <>
      <div className="card-poster">
        <Link className="card-poster-link" to={`/movie/${item.id}`}>
          {item.poster_path ? (
            <FadeIn>
              {(handleOnLoad) => (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                  className="card-poster-img"
                  onLoad={handleOnLoad}
                />
              )}
            </FadeIn>
          ) : (
            <Placeholder />
          )}
        </Link>
      </div>
      <div className="card-meta">
        <div className="card-line card-line-one">
          <p className="card-text">{item.title}</p>
        </div>
        <div className="card-line card-line-two">
          <StarRating rating={item.vote_average / 2} />
          <span>{item.vote_average}</span>
        </div>
      </div>
    </>
  );
}

function ShowCard(props) {
  const { item } = props;
  return (
    <>
      <div className="card-poster">
        <Link className="card-poster-link" to={`/tv/${item.id}`}>
          {item.poster_path ? (
            <FadeIn>
              {(handleOnLoad) => (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.name}
                  className="card-poster-img"
                  onLoad={handleOnLoad}
                />
              )}
            </FadeIn>
          ) : (
            <Placeholder />
          )}
        </Link>
      </div>
      <div className="card-meta">
        <div className="card-line card-line-one">
          <p className="card-text">{item.name}</p>
        </div>
        <div className="card-line card-line-two">
          <StarRating rating={item.vote_average / 2} />
          <span>{item.vote_average}</span>
        </div>
      </div>
    </>
  );
}

function PersonCard(props) {
  const { item } = props;
  return (
    <>
      <div className="card-poster">
        <Link className="card-poster-link" to={`/person/${item.id}`}>
          {item.profile_path ? (
            <FadeIn>
              {(handleOnLoad) => (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                  alt={item.name}
                  className="card-poster-img"
                  onLoad={handleOnLoad}
                />
              )}
            </FadeIn>
          ) : (
            <Placeholder />
          )}
        </Link>
      </div>
      <div className="card-meta">
        <div className="card-line card-line-one">
          <p className="card-text">{item.name}</p>
        </div>
        <div className="card-line card-line-two">
          <p className="card-text">{item.character || "No Character"}</p>
        </div>
      </div>
    </>
  );
}
