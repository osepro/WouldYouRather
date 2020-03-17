import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
//import Nav from "./Nav";

class Players extends Component {
  render() {
    return (
      <div>
        <div>
          <div align="center">
            <div className="paper">
              <div className="headerPlay">
                <ul className="questionHeader">
                  <li>Unanswered Questions</li>
                  <li>Answered Questions</li>
                </ul>
              </div>
              <div className="playerProfile">
                <div className="profilePix"></div>
                <div className="profileContent">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              </div>

              <div className="form"></div>
              <p></p>
            </div>
          </div>
        </div>
        <p>Hello{this.props.id}</p>
      </div>
    );
  }
}

function mapStateToProps({ users }, props) {
  const { id } = props.match.params;

  return {
    id,
    users: users
  };
}

export default connect(mapStateToProps)(Players);
