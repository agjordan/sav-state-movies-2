import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "../components/Detail";
import Header from "../components/Header";
import List from "../components/List";
import SearchResults from "../components/SearchResults";
import { getTVShows } from "../services/TVShows/tvshows.service";

const Routes = (): ReactElement => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/show/:id">
          <Detail />
        </Route>
        <Route path="/search/:query">
          <SearchResults />
        </Route>
        <Route path="/">
          <List getTVShows={getTVShows} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
