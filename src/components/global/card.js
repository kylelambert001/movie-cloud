import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "./fade-in";

function Card(props) {
  const { poster_path, title, release_date, id } = props.data;
  const { mediaType } = props;
  return (
    <div className="card">
      <div className="card-poster">
        <FadeIn>
          {(handleOnLoad) => (
            <Link to={`/details/${mediaType}/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt=""
                className="card-poster-img"
                onLoad={handleOnLoad}
              />
            </Link>
          )}
        </FadeIn>
      </div>
      <div className="card-meta">
        <p className="card-title">{title}</p>
        <p className="card-release">{release_date}</p>
      </div>
    </div>
  );
}

export default Card;
