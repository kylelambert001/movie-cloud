import React from "react";
// import { Switch, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

import Home from "./components/pages/Home";

import "./App.scss";

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      <Home />
      {/* <Navbar /> */}
      {/* <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/movies" component={MoviesContainer} />
          <Route exact path="/tv-shows" component={ShowsContainer} />
          <Route exact path="/404" component={ErrorView} />
        </Switch>
      </AnimatePresence> */}
    </div>
  );
}

export default App;
