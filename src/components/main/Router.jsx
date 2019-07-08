import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import ResetPassword from "./ResetPassword";

import Profile from "./Profile";
import SubjectPost from "./SubjectPost";
import UserProfile from "./UserProfile";

import Share from "./Share";
import NotFound from "./NotFound";
import Learn from "./Learn";
import Library from "./Library";
import OtherLink from "./OtherLink";

class Router extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={Share} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-out" component={SignOut} />
        <Route path="/reset-password" component={ResetPassword} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/posts/:title" component={SubjectPost} />
        <PrivateRoute path="/username/:username" component={UserProfile} />
        {/* Pages */}
        <PrivateRoute path="/learn" component={Learn} />
        <PrivateRoute path="/library" component={Library} />
        <PrivateRoute path="/other-link" component={OtherLink} />

        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default Router;
