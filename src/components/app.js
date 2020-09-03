import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./global/navbar";
import HomeContainer from "./containers/home-container";
import MoviesContainer from "./containers/movies-container";
import ShowsContainer from "./containers/shows-container";
import DetailsContainer from "./containers/details-container";

import "../scss/main.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <main className="app-main">
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/movies" component={MoviesContainer} />
            <Route exact path="/shows" component={ShowsContainer} />
            <Route
              exact
              path="/details/:type/:id"
              component={DetailsContainer}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
