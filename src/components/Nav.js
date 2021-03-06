import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { userloggedin } from "../actions/userloggedin";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Nav extends Component {
  state = {
    loggedIn: "loggedin",
  };
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(userloggedin(false));
  };
  render() {
    const { loggediduser, users } = this.props;
    return (
      <div>
        <div className="appBar">
          <div align="center" className="divLeft">
            <ul className="navList">
              <li>
                <NavLink
                  to={`${loggediduser ? `/users/` : "/"}`}
                  exact
                  activeClassName="active-nav"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/newquestions/`}
                  exact
                  activeClassName="active-nav"
                >
                  New Question
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/leaderboard/`}
                  exact
                  activeClassName="active-nav"
                >
                  Leader Board
                </NavLink>
              </li>
            </ul>
          </div>
          {loggediduser && users
            ? Object.keys(this.props.users)
                .filter((user) => user === this.props.loggediduser)
                .map((user, i) => (
                  <div key={i} className="userprofileInfo">
                    <ul className="userprofileInfoList">
                      <li>Hello, {this.props.users[user].name}</li>
                      <li>
                        <div
                          className="userprofilePix"
                          style={{
                            backgroundImage: `url(${this.props.users[user].avatarURL})`,
                            backgroundSize: "25px 25px",
                          }}
                        ></div>
                      </li>
                      <Link to={`/`} className="homeRedirect">
                        <li onClick={this.handleLogout}>LogOut</li>
                      </Link>
                    </ul>
                  </div>
                ))
            : ""}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, userloggedin }) {
  return {
    users: users,
    loggediduser: userloggedin,
  };
}

export default withRouter(connect(mapStateToProps)(Nav));
