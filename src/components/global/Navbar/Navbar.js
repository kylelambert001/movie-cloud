import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../../../assets/icons/home.svg";
import { ReactComponent as MovieIcon } from "../../../assets/icons/movie.svg";
import { ReactComponent as TelevisionIcon } from "../../../assets/icons/television.svg";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

import "./Navbar.scss";

function Navbar(props) {
  return (
    <header className="Navbar">
      <nav className="Navbar-nav">
        <ul className="Navbar-list">
          <li className="Navbar-item">
            <NavLink
              className="Navbar-link"
              exact
              activeClassName="selected"
              to="/">
              <HomeIcon />
            </NavLink>
          </li>
          <li className="Navbar-item">
            <NavLink
              className="Navbar-link"
              exact
              activeClassName="selected"
              to="/movies">
              <MovieIcon />
            </NavLink>
          </li>
          <li className="Navbar-item">
            <NavLink
              className="Navbar-link"
              exact
              activeClassName="selected"
              to="/tv-shows">
              <TelevisionIcon />
            </NavLink>
          </li>
          <li className="Navbar-item">
            <NavLink
              className="Navbar-link"
              exact
              activeClassName="selected"
              to="/search">
              <SearchIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
