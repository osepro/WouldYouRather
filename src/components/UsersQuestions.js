import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class UsersQuestions extends Component {
  viewPoll = (id) => {
    this.props.history.push(`/questions/${id}`);
  };
  render() {
    const questionCreated = this.props.users[this.props.userid].questions;

    return (
      <div>
        <div>
          <ul>
            {this.props.question.map((quest) =>
              this.props.questions[quest] === undefined
                ? ""
                : this.props.questions[quest].optionTwo.text.substring(0, 8)
            )}
          </ul>
          <div>
            <button
              className="view-button"
              onClick={() => this.viewPoll(questionCreated[0])}
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

function mapStateToProps({ questions, users }) {
  return {
    questions,
    users,
  };
}

export default withRouter(connect(mapStateToProps)(UsersQuestions));
