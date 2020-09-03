import React from "react";
import FadeIn from "./fade-in";

function HeroBackdrop(props) {
  const { backdropPath, alt } = props;
  return (
    <div className="hero-backdrop">
      <FadeIn>
        {(handleOnLoad) =>
          backdropPath && (
            <img
              src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
              alt={alt}
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
