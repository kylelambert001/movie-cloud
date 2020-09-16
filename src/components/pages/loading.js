import React, { Component } from "react";
import Spinner from "../global/spinner";

import PageTransition from "../layouts/page-transition";

class Loading extends Component {
  render() {
    return (
      <PageTransition>
        <div className="loading">
          <Spinner />
        </div>
      </PageTransition>
    );
  }
}

export default Loading;
