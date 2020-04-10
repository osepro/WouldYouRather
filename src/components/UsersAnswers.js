import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class UsersAnswers extends Component {
  goScoreBoard = (id) => {
    this.props.history.push(`/scoreboard/${id}`);
  };
  render() {
    const { questions, answers } = this.props;
    return (
      <div>
        <div>
          <ul>
            {questions[Object.keys(answers)[0]][Object.values(answers)[0]].text}
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

function mapStateToProps({ questions }) {
  return {
    questions: questions,
  };
}

export default withRouter(connect(mapStateToProps)(UsersAnswers));
