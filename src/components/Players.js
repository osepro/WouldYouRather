import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";

class Players extends Component {
  state = {
    currentView: true,
  };
  viewPoll = (id, profileId) => {
    if (id === profileId) {
      this.props.history.push(`/profile/${id}`);
    } else {
      alert("You can't access this account");
    }
  };

  changeQuestions = (quest) => {
    this.setState({
      currentView: quest,
    });
  };

  render() {
    return (
      <div>
        <div>
          <div align="center">
            <div className="paper">
              <div className="grid-container">
                <div
                  className={this.state.currentView ? "active item" : "item"}
                  onClick={() => this.changeQuestions(true)}
                >
                  Unanswered Questions
                </div>
                <div
                  className={this.state.currentView ? "item" : "active item"}
                  onClick={() => this.changeQuestions(false)}
                >
                  Answered Questions
                </div>
              </div>
              {this.state.currentView ? (
                <UnAnsweredQuestions
                  users={this.props.users}
                  loggediduser={this.props.loggediduser}
                  viewPoll={this.viewPoll}
                  notanswered={this.props.notanswered}
                />
              ) : (
                <AnsweredQuestions
                  users={this.props.users}
                  loggediduser={this.props.loggediduser}
                  viewPoll={this.viewPoll}
                  answered={this.props.answered}
                />
              )}
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
    .filter((question) => answeredquest.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const notanswered = Object.values(questions)
    .filter((question) => !answeredquest.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    id,
    users: users,
    questions: questions,
    loggediduser: userloggedin,
    answered,
    notanswered,
  };
}

export default connect(mapStateToProps)(Players);
