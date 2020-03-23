import React, { Component, Fragment } from "react";
import Nav from "./Nav";
import UserLogIn from "./UserLogIn";
import Players from "./Players";
import NewQuestions from "./NewQuestions";
import PlayerProfile from "./PlayerProfile";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleUsersLoad } from "../actions";
import { userloggedin } from "../actions/userloggedin";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleUsersLoad());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Nav />
          {this.props.loading === true ? null : (
            <div>
              <Route path="/" exact component={UserLogIn} />
              <Route path="/users/:id" component={Players} />
              <Route path="/newquestions" component={NewQuestions} />
              <Route path="/profile/:id" component={PlayerProfile} />
            </div>
          )}
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.users === null
  };
};

export default connect(mapStateToProps)(App);