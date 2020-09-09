import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as MovieIcon } from "../../assets/movie.svg";
import { ReactComponent as TelevisionIcon } from "../../assets/television.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

function Sidebar(props) {
  return (
    <header className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <NavLink
              className="sidebar-link"
              exact
              activeClassName="sidebar-link--active"
              to="/">
              <HomeIcon />
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              className="sidebar-link"
              exact
              activeClassName="sidebar-link--active"
              to="/movies">
              <MovieIcon />
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              className="sidebar-link"
              exact
              activeClassName="sidebar-link--active"
              to="/shows">
              <TelevisionIcon />
            </NavLink>
          </li>
          {/* <li className="sidebar-item">
            <NavLink
              className="sidebar-link"
              exact
              activeClassName="sidebar-link--active"
              to="/">
              <SearchIcon />
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Sidebar;
