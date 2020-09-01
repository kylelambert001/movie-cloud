import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import logo from "../../assets/logo.svg";

import Hamburger from "./hamburger";

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

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Movie Cloud Logo" className="navbar-logo-img" />
        </div>
        <nav className="navbar-nav">
          <ul className="navbar-nav-list">
            {routes.map((route) => (
              <li key={uuidv4()} className="navbar-nav-item">
                <Link className="navbar-nav-link" to={route.path}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar-hamburger">
          ham
          <span className="navbar-hamburger-line line-top"></span>
          <span className="navbar-hamburger-line line-middle"></span>
          <span className="navbar-hamburger-line line-bottom"></span>
        </div>
        {/* <Hamburger /> */}
      </header>
    );
  }
}

export default Navbar;
