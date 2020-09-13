import React from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as MovieIcon } from "../../assets/movie.svg";
import { ReactComponent as ShowIcon } from "../../assets/show.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const routes = [
  { path: "/", icon: () => <HomeIcon /> },
  { path: "/movie", icon: () => <MovieIcon /> },
  { path: "/tv", icon: () => <ShowIcon /> },
  { path: "/search", icon: () => <SearchIcon /> },
];

function Sidebar(props) {
  return (
    <header className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          {routes.map((route) => (
            <li key={uuidv4()} className="sidebar-item">
              <NavLink
                className="sidebar-link"
                exact
                activeClassName="sidebar-link--active"
                to={route.path}>
                {route.icon()}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Sidebar;
