import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

class MainRouter extends Component {
  constructor(props) {
    super(props);
    this.state = { logged: "" };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route path="/*" component={Login}></Route>
        </Switch>
      </Router>
    );
  }
}
export default MainRouter;
