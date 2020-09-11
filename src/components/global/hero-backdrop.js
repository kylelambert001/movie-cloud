import React from "react";
import FadeIn from "./fade-in";

function HeroBackdrop(props) {
  const { item, mediaType } = props;
  return (
    <div className="hero-backdrop">
      <FadeIn>
        {(handleOnLoad) =>
          item.backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt={mediaType === "movie" ? item.title : item.name}
              onLoad={handleOnLoad}
              className="hero-backdrop-img"
            />
          )
        }
      </FadeIn>
    </div>
  );
}

export default HeroBackdrop;
