import React, { Component } from "react";
import { motion } from "framer-motion";

import { pageVariant } from "../../animations/variants";
import { getRandomItem } from "../../utils/helpers";
import ShowcaseItems from "../global/showcase-items";
import Hero from "../global/hero";
import Footer from "../global/footer";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.randomShow = getRandomItem(props.movies.upcomingMovies.data);
  }

  componentDidMount() {
    document.title = "Movies";
  }

  render() {
    return (
      <motion.div initial="hidden" animate="visible" variants={pageVariant}>
        <Hero data={this.randomShow} mediaType="movie" />
        <section>
          <ShowcaseItems
            heading="Upcoming Movies"
            itemsArray={this.props.movies.upcomingMovies.data}
            mediaType="movie"
          />
          <ShowcaseItems
            heading="Popular Movies"
            itemsArray={this.props.movies.popularMovies.data}
            mediaType="movie"
          />
          <ShowcaseItems
            heading="Top Rated Movies"
            itemsArray={this.props.movies.topRatedMovies.data}
            mediaType="movie"
          />
          <ShowcaseItems
            heading="Now Playing Movies"
            itemsArray={this.props.movies.nowPlayingMovies.data}
            mediaType="movie"
          />
        </section>
        <Footer />
      </motion.div>
    );
  }
}

export default Movies;
