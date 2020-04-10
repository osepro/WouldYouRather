import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class UsersQuestions extends Component {
  viewPoll = (id) => {
    if (!id) {
      alert("Congratulations!!! You have all questions here.");
    } else {
      this.props.history.push(`/questions/${id}`);
    }
  };
  render() {
    const { userid, users, userloggedin, questions } = this.props;
    const questionCreated = users[userid].questions;
    const answeredQuest = Object.keys(users[userloggedin].answers);

    let checkQuestionedAnswered = new Set(answeredQuest);
    let resultAfterCheck = [
      ...new Set(
        [...questionCreated].filter(
          (question) => !checkQuestionedAnswered.has(question)
        )
      ),
    ];

    return (
      <div>
        <div>
          <ul>{questions[questionCreated[0]].optionTwo.text.substring(0)}</ul>
          <div>
            <button
              className="view-button"
              onClick={() => this.viewPoll(resultAfterCheck[0])}
            >
              View Poll
            </button>
          </div>
        </div>
      </div>
    );
  }
}

UsersQuestions.propTypes = {
  userid: PropTypes.string.isRequired,
};

function mapStateToProps({ questions, users, userloggedin }) {
  return {
    questions,
    users,
    userloggedin,
  };
}

export default withRouter(connect(mapStateToProps)(UsersQuestions));
