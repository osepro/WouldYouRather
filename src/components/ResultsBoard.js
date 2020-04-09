import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ResultsBoards extends Component {
  render() {
    return (
      <div>
        <div className="gridContainerRes">
          <div>
            <p>Answered questions</p>
            <hr></hr>
            <p>Created questions</p>
          </div>
          <div>
            <p>
              {Object.keys(this.props.users[this.props.user].answers).length}
            </p>
            <hr></hr>
            <p>{this.props.users[this.props.user].questions.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

ResultsBoards.propTypes = {
  user: PropTypes.string.isRequired,
};

function mapStateToProps({ questions, users }, props) {
  return {
    questions,
    users,
  };
}

export default connect(mapStateToProps)(ResultsBoards);
