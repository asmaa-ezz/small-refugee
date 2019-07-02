import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home/index";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "../SignOut";
import ResetPassword from "./ResetPassword";
// import Profile from "./Profile";
// import SubjectPost from "./SubjectPost";
// import UserProfile from "./UserProfile";
// import NotFound from "./NotFound";
import { PrivateRoute } from "../PrivateRoute";

class Main extends Component {
  render() {
    return (
      <div
        style={{
          background: "rgba(204, 204, 204, 0.2)",
          paddingTop: "5vh",
          minHeight: "90vh"
        }}
      >
        <div className="container">
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-out" component={SignOut} />
            <Route path="/reset-password" component={ResetPassword} />
            {/* <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/posts/:title" component={SubjectPost} />
            <PrivateRoute path="/username/:username" component={UserProfile} /> */}
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
