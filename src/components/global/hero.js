import React from "react";

import HeroBackdrop from "./hero-backdrop";
import HeroInfo from "./hero-info";

function Hero(props) {
  const { mediaType, item } = props;
  return (
    <section className="hero">
      <HeroBackdrop item={item} mediaType={mediaType} />
      <HeroInfo item={item} mediaType={mediaType} />
    </section>
  );
}

export default Hero;
