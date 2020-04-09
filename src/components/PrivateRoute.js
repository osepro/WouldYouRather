import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggediduser } = rest;
  return (
    <Route
      {...rest}
      render={(props) =>
        loggediduser ? <Component {...props} /> : <Redirect to="/404" />
      }
    />
  );
};

function mapStateToProps({ users, userloggedin }) {
  return {
    loggediduser: userloggedin,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
