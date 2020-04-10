import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class UsersAnswers extends Component {
  goScoreBoard = (id) => {
    this.props.history.push(`/scoreboard/${id}`);
  };
  render() {
    const { questions, answers, users, userid } = this.props;
    const answeredQuestions = Object.keys(answers).filter((question) =>
      users[userid].questions.includes(question)
    );

    return (
      <div>
        <div>
          <ul>
            {
              questions[answeredQuestions[answeredQuestions.length - 1]][
                answers[
                  questions[answeredQuestions[answeredQuestions.length - 1]].id
                ]
              ].text
            }
          </ul>
          <div>
            <button
              className="view-button"
              onClick={() =>
                this.goScoreBoard(questions[Object.keys(answers)[0]].id)
              }
            >
              View Poll
            </button>
          </div>
        </div>
      </div>
    );
  }
}

UsersAnswers.propTypes = {
  answers: PropTypes.object.isRequired,
  userid: PropTypes.string.isRequired,
};

function mapStateToProps({ questions, users }) {
  return {
    questions,
    users,
  };
}

export default withRouter(connect(mapStateToProps)(UsersAnswers));
