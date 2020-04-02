import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import UsersQuestions from "./UsersQuestions";

class Players extends Component {
  viewPoll = (id, profileId) => {
    if (id === profileId) {
      this.props.history.push(`/profile/${id}`);
    } else {
      alert("You can't access this account");
    }
  };
  render() {
    return (
      <div>
        <div>
          <div align="center">
            <div className="paper">
              <div className="headerPlay">
                <ul className="questionHeader">
                  <li>
                    <a href="#">Unanswered Questions</a>
                  </li>
                  <li>
                    <a href="#">Answered Questions</a>
                  </li>
                </ul>
              </div>
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
                          backgroundSize: "105px 105px"
                        }}
                      ></div>
                      <div className="profileContent">
                        <h4 className="would-header">Would you rather</h4>
                        <div>
                          ...
                          <UsersQuestions
                            question={this.props.users[key].questions}
                            unanswered={this.props.unanswered}
                          />
                          ...
                        </div>
                        <button
                          className="view-button"
                          onClick={() =>
                            this.viewPoll(
                              this.props.loggediduser,
                              this.props.users[key].id
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
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, userloggedin }, props) {
  const { id } = props.match.params;
  const answeredquest = Object.keys(users[id].answers);
  const answered = Object.values(questions)
    .filter(question => answeredquest.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const notanswered = Object.values(questions)
    .filter(question => !answeredquest.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    id,
    users: users,
    questions: questions,
    loggediduser: userloggedin,
    answered,
    notanswered
  };
}

export default connect(mapStateToProps)(Players);
