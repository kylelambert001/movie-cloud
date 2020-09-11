import React, { Component } from "react";

import Hero from "../global/hero";
import Footer from "../global/footer";
import PageLayout from "../layouts/page-layout";

class Details extends Component {
  render() {
    const { mediaType, data } = this.props;

    return (
      <PageLayout>
        {mediaType === "movie" && <Hero item={data} mediaType={mediaType} />}
        {mediaType === "tv" && <Hero item={data} mediaType={mediaType} />}
        <section></section>
        <Footer />
      </PageLayout>
    );
  }
}

export default Details;
