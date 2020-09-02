import React, { Component } from "react";
import FadeIn from "./fade-in";

class Hero extends Component {
  render() {
    const { content } = this.props;
    const imageSrc = `https://image.tmdb.org/t/p/original/${content.backdrop_path}`;
    return (
      <section className="hero">
        <div className="hero-backdrop">
          <FadeIn>
            {(handleOnLoad) => (
              <img
                src={imageSrc}
                alt=""
                onLoad={handleOnLoad}
                className="hero-backdrop-img"
              />
            )}
          </FadeIn>
        </div>
        <div className="hero-content">
          <div className="hero-content-box">
            <h1>title</h1>
            <p>subtitle</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis eius aliquid quis magni, ad voluptatum temporibus
              delectus asperiores sunt corporis. Ducimus itaque non esse minus
              deleniti, vitae corrupti excepturi sit. Eaque distinctio atque
              iure tempore illum! Suscipit voluptatibus doloribus blanditiis
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
