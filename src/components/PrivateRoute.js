import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggediduser } = rest;
  return (
    <Route
      {...rest}
      render={(props) =>
        loggediduser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

function mapStateToProps({ userloggedin }) {
  return {
    loggediduser: userloggedin,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
