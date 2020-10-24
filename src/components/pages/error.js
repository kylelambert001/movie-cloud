import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../layouts/page-transition";
import logo from "../../assets/logo.svg";

class Error extends PureComponent {
  render() {
    return (
      <PageTransition>
        <div className="error">
          <div className="error-inner">
            <div className="error-logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="Movie Cloud Logo"
                  className="error-logo-img"
                />
              </Link>
            </div>
            <p className="error-text">
              Sorry, there was a problem processing your request. Please try
              again in a few minutes...
            </p>
          </div>
        </div>
      </PageTransition>
    );
  }
}

export default Error;
