import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "../../PrivateRoute";

import StaticList from "./StaticList";

import Share from "./Share";

import Profile from "./Profile";
import SubjectPost from "./SubjectPost";
import UserProfile from "./UserProfile";
import NotFound from "./NotFound";

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <StaticList />
        </div>

        <div className="col-10">
          <Switch>
            <PrivateRoute path="/share" component={Share} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/posts/:title" component={SubjectPost} />
            <PrivateRoute path="/username/:username" component={UserProfile} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
