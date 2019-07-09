import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, dataStitic, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} dataStitic={dataStitic} />
      ) : (
        <Redirect to={{ pathname: "/home", state: { from: props.location } }} />
      )
    }
  />
);

export const PublicRoute = ({ component: Component, dataStitic, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !localStorage.getItem("token") ? (
        <Component {...props} dataStitic={dataStitic} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
