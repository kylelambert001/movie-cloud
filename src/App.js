import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/global/Navbar/Navbar";
import HomeContainer from "./components/containers/HomeContainer";
import MoviesContainer from "./components/containers/MoviesContainer";
import ShowsContainer from "./components/containers/ShowsContainer";

import "./App.scss";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/movies" component={MoviesContainer} />
          <Route exact path="/tv-shows" component={ShowsContainer} />
          {/* <Route exact path="/404" component={ErrorView} /> */}
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
