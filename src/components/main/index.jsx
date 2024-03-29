import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import SignOut from "./Pages/SignOut";
import ResetPassword from "./Pages/ResetPassword";
import Profile from "./Pages/Profile";
import SubjectPost from "./Pages/SubjectPost";
import UserProfile from "./Pages/UserProfile";
import Share from "./Pages/Share";
import NotFound from "./Pages/NotFound";
import { PrivateRoute, PublicRoute } from "../PrivateRoute";

import Home from "./Pages/Home";
import Learn from "./Pages/Learn";
import UnitsPage from "./Pages/UnitsPage";
import LessonPage from "./Pages/LessonPage";
import TestPage from "./Pages/TestPage";
import Library from "./Pages/Library";
import OtherLink from "./Pages/OtherLink";

class Main extends Component {
  render() {
    const { dataStitic } = this.props;
    return (
      <div
        style={{
          background: "rgba(204, 204, 204, 0.2)",
          paddingTop: "20px",
          minHeight: "90vh"
        }}
      >
        <div className="container">
          <Switch>
            <PublicRoute exact path="/home" component={Home} />
            <PublicRoute path="/reset-password" component={ResetPassword} />
            <PublicRoute path="/sign-in" component={SignIn} />
            <PublicRoute path="/sign-up" component={SignUp} />

            <Route path="/sign-out" component={SignOut} />

            <PrivateRoute
              exact
              path="/"
              component={Share}
              dataStitic={dataStitic}
            />
            <PrivateRoute
              path="/profile"
              component={Profile}
              dataStitic={dataStitic}
            />
            <PrivateRoute
              path="/username/:username"
              component={UserProfile}
              dataStitic={dataStitic}
            />
            <PrivateRoute
              path="/posts/:title"
              component={SubjectPost}
              dataStitic={dataStitic}
            />

            {/* Pages */}
            <PrivateRoute
              exact
              path="/learn"
              component={Learn}
              dataStitic={dataStitic}
            />
            <PrivateRoute
              exact
              path="/learn/:id"
              component={UnitsPage}
              dataStitic={dataStitic}
            />
            <PrivateRoute
              path="/learn/unit/:id"
              component={LessonPage}
              dataStitic={dataStitic}
            />

            <PrivateRoute
              path="/learn/:idLesson/:id"
              component={TestPage}
              dataStitic={dataStitic}
            />
            <PrivateRoute
              path="/library"
              component={Library}
              dataStitic={dataStitic}
            />
            <PrivateRoute
              path="/other-link"
              component={OtherLink}
              dataStitic={dataStitic}
            />

            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
