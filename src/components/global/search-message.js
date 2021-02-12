import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "../layouts/page-transition";

import logo from "../../assets/logo.svg";

function SearchMessage({ message }) {
  return (
    <PageTransition>
      <div className="search-message">
        <div className="search-message-inner">
          <div className="search-message-logo">
            <Link to="/">
              <img src={logo} alt="Movie Cloud Logo" className="search-message-logo-img" />
            </Link>
          </div>
          <p className="search-message-text">{message ? message : ""}</p>
        </div>
      </div>
    </PageTransition>
  );
}

export default SearchMessage;
