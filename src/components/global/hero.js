import React, { Component } from "react";
import FadeIn from "./fade-in";
import HeroInfo from "./hero-info";

class Hero extends Component {
  render() {
    const { content } = this.props;
    const { backdrop_path, name, title } = content;
    return (
      <section className="hero">
        <div className="hero-backdrop">
          <FadeIn>
            {(handleOnLoad) => (
              <img
                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                alt={title ? title : name}
                onLoad={handleOnLoad}
                className="hero-backdrop-img"
              />
            )}
          </FadeIn>
        </div>
        <div className="hero-content">
          <HeroInfo content={content} />
        </div>
      </section>
    );
  }
}

export default Hero;
