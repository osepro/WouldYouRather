import React, { Component } from "react";
import UsersAnswers from "./UsersAnswers";
import { withRouter } from "react-router-dom";

class AnsweredQuestions extends Component {
  viewPoll = (id, profileId, qid) => {
    if (id === profileId) {
      this.props.history.push(`/scoreboard/${id}/${qid}`);
    } else {
      alert("You can't access this account");
    }
  };
  goScoreBoard = (id, qid) => {
    this.props.history.push(`/scoreboard/${id}/${qid}`);
  };
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
                <button
                  className="view-button"
                  onClick={() =>
                    this.goScoreBoard(
                      this.props.loggediduser,
                      this.props.users[key].questions[0]
                    )
                  }
                >
                  View Poll
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(AnsweredQuestions);
