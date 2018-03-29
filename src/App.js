import React, { Component } from "react";
import "./App.css";
import { Switch, Route, HashRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Private from "./components/Private/Private";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/private" component={Private} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
