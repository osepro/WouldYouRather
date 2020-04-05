import React, { Component } from "react";
import { connect } from "react-redux";

class UsersAnswers extends Component {
  render() {
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
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }) {
  return {
    questions: questions,
    users: users,
  };
}

export default connect(mapStateToProps)(UsersAnswers);
