import React, { Component } from "react";
import Spinner from "../global/spinner";

import PageTransition from "../layouts/page-transition";

class Loading extends Component {
  render() {
    return (
      <PageTransition>
        <div className="loading">
          <div className="loading-spinner">
            <Spinner />
          </div>
        </div>
      </PageTransition>
    );
  }
}

export default Loading;
