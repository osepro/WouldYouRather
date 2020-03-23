import React, { Component } from "react";
import "../App.css";
import logoReduxReact from "../logoReduxReact.jpeg";
import { userloggedin } from "../actions/userloggedin";
import { connect } from "react-redux";

class UserLogIn extends Component {
  state = {
    selectVal: ""
  };

  handleSelect = e => {
    e.preventDefault();
    const id = e.target.value;
    this.setState({
      selectVal: id
    });
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    dispatch(userloggedin(this.state.selectVal));
    this.props.history.push(`/users/${this.state.selectVal}`);
  };

  render() {
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
            <p
              align="center"
              style={{ color: "#3BFEBB", fontSize: "16px", fontWeight: "bold" }}
            >
              Sign in
            </p>
            <div>
              <div className="form">
                <form onSubmit={this.handleSubmit}>
                  <select id="users" onChange={this.handleSelect}>
                    <option>Select User</option>
                    {!this.props.users
                      ? ""
                      : Object.keys(this.props.users).map(key => (
                          <option
                            key={this.props.users[key].id}
                            value={this.props.users[key].id}
                            style={{
                              backgroundImage: `url(${this.props.users[key].avatarURL})`,
                              backgroundSize: "15px 15px",
                              float: "left"
                            }}
                          >
                            {this.props.users[key].name}
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

const mapStateToProps = state => {
  return {
    users: state.users,
    questions: state.questions
  };
};

export default connect(mapStateToProps)(UserLogIn);
