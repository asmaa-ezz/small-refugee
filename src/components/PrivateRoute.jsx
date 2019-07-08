import React from "react";
import { Route, Redirect } from "react-router-dom";

const data = {
  userImage:
    "https://www.whittierfirstday.org/wp-content/uploads/default-user-image-e1501670968910.png",
  fullName: "أسماء المدهون",
  stage: "طالب صف أول"
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} dataStitic={data} />
      ) : (
        <Redirect
          to={{ pathname: "/sign-in", state: { from: props.location } }}
        />
      )
    }
  />
);
