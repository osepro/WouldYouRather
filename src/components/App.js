import React, { Component } from "react";
import Nav from "./Nav";
import UserLogIn from "./UserLogIn";
import { connect } from "react-redux";
//import { allusers } from "../actions/users";
import { handleUsersLoad } from "../actions";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleUsersLoad());
  }

  render() {
    return (
      <div>
        <Nav />
        <LoadingBar />
        {this.props.loading === true ? null : <UserLogIn />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.users === null
  };
};

export default connect(mapStateToProps)(App);
