import React, { Component } from "react";
import "../App.css";
import logoReduxReact from "../logoReduxReact.jpeg";
import { connect } from "react-redux";

class UserLogIn extends Component {
  render() {
    console.log(this.props.users.users);
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
            {!this.props.users.users
              ? ""
              : this.props.users.users.map((member, i) => (
                  <div key={i}>
                    <form className="form" noValidate>
                      <select id="users">
                        <option>Select User</option>
                        {Object.keys(member).map(key => (
                          <option
                            key={member[key].id}
                            value={member[key].id}
                            style={{
                              backgroundImage: `url(${member[key].avatarURL})`,
                              width: "50px",
                              height: "50px"
                            }}
                          >
                            {member[key].name}
                          </option>
                        ))}
                      </select>
                    </form>
                    <p></p>
                  </div>
                ))}

            <p
              align="center"
              style={{ color: "#3BFEBB", fontSize: "16px", fontWeight: "bold" }}
            >
              Sign in
            </p>

            <button className="submit">Sign In</button>
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
