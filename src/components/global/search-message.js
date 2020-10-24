import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "../layouts/page-transition";

import logo from "../../assets/logo.svg";

function SearchMessage(props) {
  return (
    <PageTransition>
      <div className="search-message">
        <div className="search-message-inner">
          <div className="search-message-logo">
            <Link to="/">
              <img
                src={logo}
                alt="Movie Cloud Logo"
                className="search-message-logo-img"
              />
            </Link>
          </div>
          <p className="search-message-text">
            Hi, welcome to MovieCloud's search functionality. Simply start
            typing to search for movies, tv shows or people...
          </p>
        </div>
      </div>
    </PageTransition>
  );
}

export default SearchMessage;
