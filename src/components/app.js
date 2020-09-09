import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Sidebar from "./global/sidebar";
import HomeContainer from "./containers/home-container";
import MoviesContainer from "./containers/movies-container";
import ShowsContainer from "./containers/shows-container";
import DetailsContainer from "./containers/details-container";

function isMatched(type) {
  return type === "movie" || type === "tv" || type === "person" ? true : false;
}

function App(props) {
  const renderDetailsRoute = (params) => {
    if (isMatched(params.type))
      return <DetailsContainer mediaType={params.type} contentId={params.id} />;
    return <Redirect to="/" />;
  };

  return (
    <div className="app">
      <Sidebar />
      <main>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/movies" component={MoviesContainer} />
          <Route exact path="/shows" component={ShowsContainer} />
          <Route
            exact
            path="/details/:type/:id"
            render={(history) =>
              renderDetailsRoute(history.match.params)
            }></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
