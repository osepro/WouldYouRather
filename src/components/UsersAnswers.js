import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class UsersAnswers extends Component {
  goScoreBoard = (id) => {
    this.props.history.push(`/scoreboard/${id}`);
  };
  render() {
    console.log(
      "Data ===>> ",
      this.props.questions[Object.keys(this.props.answers)[0]].id
    );
    return (
      <div>
        <div>
          <ul>
            {
              this.props.questions[Object.keys(this.props.answers)[0]][
                Object.values(this.props.answers)[0]
              ].text
            }
          </ul>
          <div>
            <button
              className="view-button"
              onClick={() =>
                this.goScoreBoard(
                  this.props.questions[Object.keys(this.props.answers)[0]].id
                )
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
};

function mapStateToProps({ questions, users }) {
  return {
    questions: questions,
    users: users,
  };
}

export default withRouter(connect(mapStateToProps)(UsersAnswers));
