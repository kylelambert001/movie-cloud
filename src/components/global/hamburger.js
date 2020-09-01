import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Movies",
    path: "/movies",
  },
  {
    name: "Shows",
    path: "/shows",
  },
];

class Hamburger extends Component {
  render() {
    return (
      <div className="hamburger">
        <nav className="hamburger-nav">
          <ul className="hamburber-nav-list">
            {routes.map((route) => (
              <li key={uuidv4()} className="hamburger-nav-item">
                <Link to={route.path} className="hamburger-nav-link">
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Hamburger;
