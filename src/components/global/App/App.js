import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import HomeContainer from "../../containers/HomeContainer";
import MoviesContainer from "../../containers/MoviesContainer";
import ShowsContainer from "../../containers/ShowsContainer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/movies" component={MoviesContainer} />
        <Route exact path="/tv-shows" component={ShowsContainer} />
        <Route exact path="/search"></Route>
      </Switch>
    </div>
  );
}

export default App;
