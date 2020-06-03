import React from "react";
import { Route, Redirect } from "react-router-dom";
const Pro = ({ component, ...rest }) => {
  let hasToken = JSON.parse(localStorage.getItem("auth"));
  var RenderComponents = component;
  return (
    <Route
      {...rest}
      render={(props) => {
        return hasToken !== null ? (
          <RenderComponents component={props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        );
      }}
    />
  );
};

export default Pro;
