import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Sidebar from "./global/sidebar";
import HomeContainer from "./containers/home-container";
import MoviesContainer from "./containers/movies-container";
import ShowsContainer from "./containers/shows-container";
import DetailsContainer from "./containers/details-container";
import SearchContainer from "./containers/search-container";

function isMatched(type) {
  return type === "movie" || type === "tv" || type === "person" ? true : false;
}

function App(props) {
  const renderDetailsRoute = (history) => {
    if (isMatched(history.match.params.type))
      return <DetailsContainer history={history} />;
    return <Redirect to="/" />;
  };

  return (
    <div className="app">
      <Sidebar />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/movie" component={MoviesContainer} />
        <Route exact path="/tv" component={ShowsContainer} />
        <Route exact path="/search" component={SearchContainer} />
        <Route
          exact
          path="/:type/:id"
          render={(history) => renderDetailsRoute(history)}></Route>
      </Switch>
    </div>
  );
}

export default App;
