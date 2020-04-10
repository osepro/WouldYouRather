import React, { Component } from "react";
import "../App.css";
import logoReduxReact from "../logoReduxReact.jpeg";
import { TiWarning } from "react-icons/ti/index";
import { userloggedin } from "../actions/userloggedin";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class UserLogIn extends Component {
  state = {
    selectVal: null,
    userRedirect: false,
  };

  handleSelect = (e) => {
    e.preventDefault();
    const id = e.target.value;
    this.setState({
      selectVal: id,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (userloggedin) {
      this.setState(() => ({
        userRedirect: true,
      }));
    }
    const { dispatch } = this.props;
    dispatch(userloggedin(this.state.selectVal));
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/users" },
    };
    const { userRedirect } = this.state;
    const { users, userloggedin } = this.props;

    if (userRedirect === true) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <div align="center">
          <div className="paper">
            <h1 className="header1">Welcome to the Would You Rather App!</h1>
            <h1 className="header2">Please sign in to continue</h1>
            <p>
              <img
                src={logoReduxReact}
                className="logo"
                alt="logo"
                height="200"
                width="200"
              />
            </p>
            {userloggedin === null && (
              <p className="warning-login-show">
                <TiWarning /> error! Please select a user
              </p>
            )}

            <p align="center" className="signInLogin">
              Sign in
            </p>
            <div>
              <div className="form">
                <form onSubmit={this.handleSubmit}>
                  <select id="users" onChange={this.handleSelect}>
                    <option>Select User</option>
                    {!users
                      ? ""
                      : Object.keys(users).map((key) => (
                          <option
                            key={users[key].id}
                            value={users[key].id}
                            style={{
                              backgroundImage: `url(${users[key].avatarURL})`,
                              backgroundSize: "15px 15px",
                              float: "left",
                            }}
                          >
                            {users[key].name}
                          </option>
                        ))}
                  </select>
                  <button className="submit">Sign In</button>
                </form>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, userloggedin }) => {
  return {
    users,
    userloggedin,
  };
};

export default connect(mapStateToProps)(UserLogIn);
