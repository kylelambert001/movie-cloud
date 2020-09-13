import React from "react";
import Placeholder from "../global/placeholder";
import FadeIn from "../global/fade-in";

function Poster(props) {
  const { data, mediaType } = props;

  const personPoster = () => {
    return data.profile_path ? (
      <FadeIn>
        {(handleOnLoad) => (
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
            alt={data.name}
            onLoad={handleOnLoad}
            className="poster-img"
          />
        )}
      </FadeIn>
    ) : (
      <Placeholder />
    );
  };

  const defaultPoster = () => {
    return data.poster_path ? (
      <FadeIn>
        {(handleOnLoad) => (
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt={mediaType === "movie" ? data.title : data.name}
            onLoad={handleOnLoad}
            className="poster-img"
          />
        )}
      </FadeIn>
    ) : (
      <Placeholder />
    );
  };

  return (
    <div className="poster">
      <div className="poster-aspect">
        <div className="poster-inner">
          {mediaType === "person" ? personPoster() : defaultPoster()}
        </div>
      </div>
    </div>
  );
}

export default Poster;
