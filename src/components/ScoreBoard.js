import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

class PlayerProfile extends Component {
  bachHome = id => {
    this.props.history.push(`/users/${id}`);
  };
  render() {
    console.log(this.props.choiceOption);
    return (
      <div>
        <div align="center">
          <p onClick={() => this.bachHome(this.props.id)} className="homeLink">
            Back Home
          </p>
          <div className="paper-1">
            {Object.keys(this.props.users)
              .filter(user => this.props.users[user].id === this.props.id)
              .map((key, i) => (
                <div className="playerProfile-inner-2" key={i}>
                  <h4 className="header-profile">
                    Asked by {this.props.users[key].name}
                  </h4>
                  <div className="mainDetails">
                    <div
                      className="profilePix"
                      style={{
                        backgroundImage: `url(${this.props.users[key].avatarURL})`,
                        backgroundSize: "105px 105px"
                      }}
                    ></div>
                    <div className="profileContent">
                      <h2 className="would-header">Results:</h2>
                      {this.props.choiceOption === "optionOne" ? (
                        <div className="yourvoteone">Your Vote</div>
                      ) : (
                        <div className="yourvotetwo">Your Vote</div>
                      )}
                      <div
                        className="topOne"
                        style={{
                          backgroundColor:
                            this.props.choiceOption === "optionOne"
                              ? "#7FFFD4"
                              : "",
                          color: "#20B2AA"
                        }}
                      >
                        <h4>Would you rather {this.props.OptionOne.text}</h4>
                        <div className="main-outter">
                          <div
                            className="innner-pro"
                            style={{
                              width: this.props.OptionOneTotal + "%"
                            }}
                          >
                            <p className="counting">
                              {this.props.OptionOneTotal}%
                            </p>
                          </div>
                        </div>
                        <p style={{color: "#000"}}>
                          <strong>
                            {this.props.OptionOne.votes.length} out of
                            {this.props.total} votes
                          </strong>
                        </p>
                      </div>
                      <div
                        className="topTwo"
                        style={{
                          backgroundColor:
                            this.props.choiceOption === "optionTwo"
                              ? "#7FFFD4"
                              : ""
                        }}
                      >
                        <h4>Would you rather {this.props.OptionTwo.text}</h4>
                        <div className="main-outter">
                          <div
                            className="innner-pro"
                            style={{
                              width: this.props.OptionTwoTotal + "%"
                            }}
                          >
                            <p className="counting">
                              {this.props.OptionTwoTotal}%
                            </p>
                          </div>
                        </div>
                        <p style={{color: "#000"}}>
                          <strong>
                            {this.props.OptionTwo.votes.length} out of
                            {this.props.total} votes
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }, props) {
  const { id, qid } = props.match.params;

  let total = [
    ...questions[qid].optionOne.votes,
    ...questions[qid].optionTwo.votes
  ].length;

  console.log(questions[qid]);

  const checkOptionChoice = () => {
    if (questions[qid].optionOne.votes.includes(id)) {
      return "optionOne";
    }
    if (questions[qid].optionTwo.votes.includes(id)) {
      return "optionTwo";
    }

    return null;
  };

  let OptionOneTotal = (
    (questions[qid].optionOne.votes.length / total) *
    100
  ).toFixed(2);
  let OptionTwoTotal = (
    (questions[qid].optionTwo.votes.length / total) *
    100
  ).toFixed(2);

  return {
    id,
    users: users,
    questions: questions,
    OptionOne: questions[qid].optionOne,
    OptionTwo: questions[qid].optionTwo,
    OptionOneTotal,
    OptionTwoTotal,
    total,
    choiceOption: checkOptionChoice()
  };
}

export default connect(mapStateToProps)(PlayerProfile);
