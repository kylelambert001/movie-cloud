import React from "react";
import { motion } from "framer-motion";
import { pageVariant } from "../../../animations/variants";

import "./Banner.scss";

function Banner(props) {
  return (
    <section className="Banner">
      <div className="Banner-backdrop">
        <div className="lazy">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            src={`https://image.tmdb.org/t/p/original/${props.content.backdrop_path}`}
            alt=""
            className="Banner-backdrop-img"
          />
        </div>
      </div>
      <div className="Banner-meta">
        <div className="Banner-meta-inner">
          <h1></h1>
          <p>sub title</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas
            ipsa fuga nulla, aut voluptatum dolore dolorum explicabo dolor dicta
            enim ullam vel! Magni ipsam tenetur maxime voluptate hic libero?
            Cupiditate quibusdam nihil sed esse aliquid. Ipsa vero praesentium
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
