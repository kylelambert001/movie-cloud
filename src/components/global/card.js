import React, { Component } from "react";
import { Link } from "react-router-dom";

import StarRating from "./star-rating";
import FadeIn from "./fade-in";

class Card extends Component {
  movieJSX() {
    const {
      id,
      poster_path,
      title = "No Title",
      vote_average = 0,
    } = this.props.data;

    return (
      <div className="card">
        <div className="card-poster">
          <FadeIn>
            {(handleOnLoad) => (
              <Link
                className="card-poster-link"
                to={`/details/${this.props.mediaType}/${id}`}>
                {poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    className="card-poster-img"
                    onLoad={handleOnLoad}
                  />
                )}
              </Link>
            )}
          </FadeIn>
        </div>
        <div className="card-meta">
          <div className="card-line card-line-one">
            <p className="card-text">{title}</p>
          </div>
          <div className="card-line card-line-two">
            <StarRating rating={vote_average / 2} />
            <span>{vote_average}</span>
          </div>
        </div>
      </div>
    );
  }

  showJSX() {
    const {
      id,
      poster_path,
      name = "No Name",
      vote_average = 0,
    } = this.props.data;

    return (
      <div className="card">
        <div className="card-poster">
          <FadeIn>
            {(handleOnLoad) => (
              <Link to={`/details/${this.props.mediaType}/${id}`}>
                {poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={name}
                    className="card-poster-img"
                    onLoad={handleOnLoad}
                  />
                )}
              </Link>
            )}
          </FadeIn>
        </div>
        <div className="card-meta">
          <div className="card-line card-line-one">
            <p className="card-text">{name}</p>
          </div>
          <div className="card-line card-line-two">
            <StarRating rating={vote_average / 2} />
            <span>{vote_average}</span>
          </div>
        </div>
      </div>
    );
  }

  personJSX() {
    const { id, profile_path, name = "No Name" } = this.props.data;
    return (
      <div className="card">
        <div className="card-poster">
          <FadeIn>
            {(handleOnLoad) => (
              <Link to={`/details/${this.props.mediaType}/${id}`}>
                {profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    alt={name}
                    className="card-poster-img"
                    onLoad={handleOnLoad}
                  />
                )}
              </Link>
            )}
          </FadeIn>
        </div>
        <div className="card-meta">
          <div className="card-line card-line-one">
            <p className="card-text">{name}</p>
          </div>
          <div className="card-line card-line-two">line two</div>
        </div>
      </div>
    );
  }

  renderJSX() {
    const { mediaType } = this.props;
    switch (mediaType) {
      case "movie":
        return this.movieJSX();
      case "tv":
        return this.showJSX();
      case "person":
        return this.personJSX();
    }
  }

  render() {
    return this.renderJSX();
  }
}

export default Card;
