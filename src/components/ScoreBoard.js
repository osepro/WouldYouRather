import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { Redirect } from "react-router-dom";

class PlayerProfile extends Component {
  bachHome = () => {
    this.props.history.push(`/users/`);
  };
  checkOptionChoice = (questDetails, id) => {
    if (questDetails.optionOne.votes.includes(id)) {
      return "optionOne";
    }
    if (questDetails.optionTwo.votes.includes(id)) {
      return "optionTwo";
    }

    return null;
  };
  render() {
    const { id, qid, users, questions } = this.props;

    const questDetails = questions[qid];

    if (!questDetails) {
      return <Redirect to="/404/" />;
    }

    let total = [
      ...questDetails.optionOne.votes,
      ...questDetails.optionTwo.votes,
    ].length;

    let OptionOneTotal = (
      (questDetails.optionOne.votes.length / total) *
      100
    ).toFixed(2);
    let OptionTwoTotal = (
      (questDetails.optionTwo.votes.length / total) *
      100
    ).toFixed(2);

    return (
      <div>
        <div align="center">
          <p onClick={() => this.bachHome()} className="homeLink">
            Back Home
          </p>
          <div className="paper-1">
            {Object.keys(users)
              .filter((user) => users[user].id === id)
              .map((key, i) => (
                <div className="playerProfile-inner-2" key={i}>
                  <h4 className="header-profile">
                    Asked by {users[questDetails.author].name}
                  </h4>
                  <div className="mainDetails">
                    <div
                      className="profilePix"
                      style={{
                        backgroundImage: `url(${
                          users[questDetails.author].avatarURL
                        })`,
                        backgroundSize: "105px 105px",
                      }}
                    ></div>
                    <div className="profileContent">
                      <h2 className="would-header">Results:</h2>
                      {() =>
                        this.checkOptionChoice(questDetails, id) ===
                        "optionOne" ? (
                          <div className="yourvoteone">Your Vote</div>
                        ) : (
                          <div className="yourvotetwo">Your Vote</div>
                        )
                      }
                      <div
                        className="topOne"
                        style={{
                          backgroundColor:
                            this.checkOptionChoice(questDetails, id) ===
                            "optionOne"
                              ? "#7FFFD4"
                              : "",
                          color: "#20B2AA",
                        }}
                      >
                        <h4>Would you rather {questDetails.optionOne.text}</h4>
                        <div className="main-outter">
                          <div
                            className="innner-pro"
                            style={{
                              width: OptionOneTotal + "%",
                            }}
                          >
                            <p className="counting">{OptionOneTotal}%</p>
                          </div>
                        </div>
                        <p style={{ color: "#000" }}>
                          <strong>
                            {questDetails.optionOne.votes.length} out of
                            {total} votes
                          </strong>
                        </p>
                      </div>
                      <div
                        className="topTwo"
                        style={{
                          backgroundColor: () =>
                            this.checkOptionChoice(questDetails, id) ===
                            "optionTwo"
                              ? "#7FFFD4"
                              : "",
                        }}
                      >
                        <h4>Would you rather {questDetails.optionTwo.text}</h4>
                        <div className="main-outter">
                          <div
                            className="innner-pro"
                            style={{
                              width: OptionTwoTotal + "%",
                            }}
                          >
                            <p className="counting">{OptionTwoTotal}%</p>
                          </div>
                        </div>
                        <p style={{ color: "#000" }}>
                          <strong>
                            {questDetails.optionTwo.votes.length} out of
                            {total} votes
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

function mapStateToProps({ users, questions, userloggedin }, props) {
  const { qid } = props.match.params;

  return {
    id: userloggedin,
    qid,
    users,
    questions,
  };
}

export default connect(mapStateToProps)(PlayerProfile);
