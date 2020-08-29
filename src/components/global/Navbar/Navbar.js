import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../../../assets/home.svg";
import { ReactComponent as MovieIcon } from "../../../assets/movie.svg";
import { ReactComponent as TelevisionIcon } from "../../../assets/television.svg";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";

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
              activeClassName="Navbar-link--active"
              to="/">
              <HomeIcon />
            </NavLink>
          </li>
          <li className="Navbar-item">
            <NavLink
              className="Navbar-link"
              exact
              activeClassName="Navbar-link--active"
              to="/movies">
              <MovieIcon />
            </NavLink>
          </li>
          <li className="Navbar-item">
            <NavLink
              className="Navbar-link"
              exact
              activeClassName="Navbar-link--active"
              to="/tv-shows">
              <TelevisionIcon />
            </NavLink>
          </li>
          <li className="Navbar-item">
            <NavLink
              className="Navbar-link"
              exact
              activeClassName="Navbar-link--active"
              to="/404">
              <SearchIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
