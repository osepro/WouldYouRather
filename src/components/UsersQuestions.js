import React, { Component } from "react";
import { connect } from "react-redux";

class UsersQuestions extends Component {
  render() {
    console.log(this.props.question);
    return (
      <div>
        <div>
          <ul>
            {this.props.question.map(quest =>
              this.props.questions[quest] === undefined
                ? ""
                : this.props.questions[quest].optionTwo.text.substring(0, 8)
            )}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questions: questions
  };
}

export default connect(mapStateToProps)(UsersQuestions);
