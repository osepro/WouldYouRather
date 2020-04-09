import React, { Component } from "react";
import UsersAnswers from "./UsersAnswers";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class AnsweredQuestions extends Component {
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
                  <UsersAnswers answers={this.props.users[key].answers} />
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

function mapStateToProps({ userloggedin, users }) {
  return {
    loggediduser: userloggedin,
    users,
  };
}

export default withRouter(connect(mapStateToProps)(AnsweredQuestions));
