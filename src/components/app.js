import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";

import Navbar from "./global/navbar";
import HomeContainer from "./containers/home-container";
import MoviesContainer from "./containers/movies-container";
import ShowsContainer from "./containers/shows-container";
import DetailsContainer from "./containers/details-container";

import "../scss/main.scss";

function App(props) {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <main>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/movies" component={MoviesContainer} />
            <Route exact path="/shows" component={ShowsContainer} />
            <Route
              exact
              path="/details/:type/:id"
              component={DetailsContainer}
            />
          </Switch>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
