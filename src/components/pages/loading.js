import React, { Component } from "react";
import PageLayout from "../layouts/page-layout";
import Spinner from "../global/spinner";

class Loading extends Component {
  render() {
    return (
      <PageLayout>
        <div className="loading">
          <Spinner />
        </div>
      </PageLayout>
    );
  }
}

export default Loading;
