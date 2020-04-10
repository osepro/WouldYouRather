import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnAnsweredQuestions";
import { Redirect } from "react-router-dom";

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
    const { userloggedin } = this.props;
    if (!userloggedin) {
      return <Redirect to="/" />;
    }
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

function mapStateToProps({ userloggedin }) {
  return {
    userloggedin,
  };
}

export default connect(mapStateToProps)(Players);
