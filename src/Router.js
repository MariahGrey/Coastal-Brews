import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import AllBeers from "./AllBeers";
import BeerDetails from "./BeerDetails";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route exact path={`/`} component={Home} />
            <Route exact path={`/:page`} component={AllBeers} />
            <Route exact path={`/beer/:id`} component={BeerDetails} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
