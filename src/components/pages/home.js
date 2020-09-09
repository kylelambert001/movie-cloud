import React, { Component } from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../animations/variants";
import { getRandomItem } from "../../utils/helpers";
import Hero from "../global/hero";
import ShowcaseItems from "../global/showcase-items";
import Footer from "../global/footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.randomMovie = getRandomItem(props.home.trendingMovies.data);
  }

  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
      <motion.div initial="hidden" animate="visible" variants={pageVariant}>
        <Hero data={this.randomMovie} mediaType="movie" />
        <section>
          <ShowcaseItems
            heading="Trending Movies"
            itemsArray={this.props.home.trendingMovies.data}
            mediaType="movie"
          />
          <ShowcaseItems
            heading="Trending Shows"
            itemsArray={this.props.home.trendingShows.data}
            mediaType="tv"
          />
        </section>
        <Footer />
      </motion.div>
    );
  }
}

export default Home;
