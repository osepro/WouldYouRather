import React, { Component } from "react";
import "../App.css";
//import Players from "./Players";
import logoReduxReact from "../logoReduxReact.jpeg";
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
            {!this.props.users.users
              ? ""
              : this.props.users.users.map((member, i) => (
                  <div key={i}>
                    <div className="form">
                      <form onSubmit={this.handleSubmit}>
                        <select id="users" onChange={this.handleSelect}>
                          <option>Select User</option>
                          {Object.keys(member).map(key => (
                            <option
                              key={member[key].id}
                              value={member[key].id}
                              style={{
                                width: "50px",
                                height: "50px",
                                float: "left"
                              }}
                            >
                              {member[key].name}
                            </option>
                          ))}
                        </select>
                        <button className="submit">Sign In</button>
                      </form>
                    </div>
                    <p></p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UserLogIn);
