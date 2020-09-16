import React, { Component } from "react";

import Hero from "../global/hero";
import Footer from "../global/footer";
import ShowcaseItems from "../global/showcase-items";
import Overview from "../global/overview";
import DetailsList from "../global/details-list";

import PageTransition from "../layouts/page-transition";

import {
  guardCredits,
  guardMovieCredits,
  guardShowCredits,
  guardSimilar,
} from "../../utils/guards";

class Details extends Component {
  componentDidMount() {
    this.setDocumentTitle();
  }

  setDocumentTitle() {
    const { data, mediaType } = this.props;
    const title = mediaType === "movie" ? data.title : data.name;
    document.title = title;
  }

  render() {
    const { mediaType, data } = this.props;
    return (
      <PageTransition>
        <main>
          {mediaType === "movie" && <Hero item={data} mediaType={mediaType} />}
          {mediaType === "tv" && <Hero item={data} mediaType={mediaType} />}
          <section>
            <Overview data={data} mediaType={mediaType} />
          </section>
          <section>
            {guardCredits(data.credits) && (
              <ShowcaseItems
                heading="Cast"
                items={data.credits.cast}
                mediaType="person"
              />
            )}
            {guardSimilar(data.similar) && (
              <ShowcaseItems
                heading="Similar Titles"
                items={data.similar.results}
                mediaType={mediaType}
              />
            )}
            {guardMovieCredits(data.movie_credits) && (
              <DetailsList
                heading={`Movie Credits`}
                results={data.movie_credits.cast}
                mediaType="movie"
              />
            )}
            {guardShowCredits(data.tv_credits) && (
              <DetailsList
                heading="TV Show Credits"
                results={data.tv_credits.cast}
                mediaType="tv"
              />
            )}
          </section>
        </main>
        <Footer />
      </PageTransition>
    );
  }
}

export default Details;
