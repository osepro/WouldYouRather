import React, { Component } from "react";
import UsersQuestions from "./UsersQuestions";
import { connect } from "react-redux";

class UnAnsweredQuestions extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.users).map((key, i) => (
          <div className="playerProfile" key={i}>
            <h4 className="header-profile">
              {this.props.users[key].name} asks:
            </h4>
            <div className="mainDetails">
              <div
                className="profilePix"
                style={{
                  backgroundImage: `url(${this.props.users[key].avatarURL})`,
                  backgroundSize: "105px 105px",
                }}
              ></div>
              <div className="profileContent">
                <h4 className="would-header">Would you rather</h4>
                <div>
                  ...
                  <UsersQuestions
                    question={this.props.users[key].questions}
                    userid={this.props.users[key].id}
                  />
                  ...
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users, userloggedin }) {
  return {
    loggediduser: userloggedin,
    users,
  };
}

export default connect(mapStateToProps)(UnAnsweredQuestions);
