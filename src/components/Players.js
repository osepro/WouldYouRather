import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";

class Players extends Component {
  state = {
    currentView: true,
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
                <UnAnsweredQuestions />
              ) : (
                <AnsweredQuestions />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, userloggedin }) {
  const answeredquest = Object.keys(users[userloggedin].answers);

  const answered = Object.values(questions)
    .filter((question) => answeredquest.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const notanswered = Object.values(questions)
    .filter((question) => !answeredquest.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    id: userloggedin,
    users: users,
    questions: questions,
    loggediduser: userloggedin,
    answered,
    notanswered: notanswered[0],
  };
}

export default connect(mapStateToProps)(Players);
