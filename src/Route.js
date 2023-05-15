import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Add from "./components/Add";
import Addjson from './components/Addjson'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/add" component={Add} />
      </Switch>
    </Router>
  );
}

export default Routes;