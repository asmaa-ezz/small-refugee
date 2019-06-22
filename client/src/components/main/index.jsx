import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "../SignOut";
import ResetPassword from "./ResetPassword";
import Profile from "./Profile";
import NotFound from "./NotFound";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-out" component={SignOut} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/Profile" component={Profile} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default Main;
