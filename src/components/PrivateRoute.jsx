import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, dataStitic, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} dataStitic={dataStitic} />
      ) : (
        <Redirect
          to={{ pathname: "/sign-in", state: { from: props.location } }}
        />
      )
    }
  />
);
