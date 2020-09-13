import React, { Component } from "react";

import Hero from "../global/hero";
import Footer from "../global/footer";
import PageLayout from "../layouts/page-layout";
import ShowcaseItems from "../global/showcase-items";
import Overview from "../global/overview";

import { guardCredits } from "../../utils/guards";

class Details extends Component {
  render() {
    const { mediaType, data } = this.props;

    return (
      <PageLayout>
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
          </section>
        </main>
        <Footer />
      </PageLayout>
    );
  }
}

export default Details;
