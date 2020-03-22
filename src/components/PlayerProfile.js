import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "../App.css";

class PlayerProfile extends Component {
  render() {
    return (
      <div>
        <div align="center">
          <div className="paper">
            {Object.keys(this.props.users)
              .filter(user => this.props.users[user].id === this.props.id)
              .map((key, i) => (
                <div className="playerProfile-inner" key={i}>
                  <h4 className="header-profile">
                    {this.props.users[key].name} asks:
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
                      <h2 className="would-header">Would You Rather...</h2>
                      <div>
                        <form>
                          {this.props.users[key].questions.map((quest, i) =>
                            this.props.questions[quest] === undefined ? (
                              ""
                            ) : (
                              <div className="listProfile" key={i}>
                                <input
                                  type="radio"
                                  name="one"
                                  value={
                                    this.props.questions[quest].optionOne.text
                                  }
                                />
                                <label htmlFor="one">
                                  {this.props.questions[quest].optionOne.text}
                                </label>
                                <br />
                                <input
                                  type="radio"
                                  name="one"
                                  value={
                                    this.props.questions[quest].optionTwo.text
                                  }
                                />
                                <label htmlFor="one">
                                  {this.props.questions[quest].optionTwo.text}
                                </label>
                                <br />
                              </div>
                            )
                          )}
                          <button className="view-rather">Submit</button>
                        </form>
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
  const { id } = props.match.params;

  return {
    id,
    users: users,
    questions: questions
  };
}

export default connect(mapStateToProps)(PlayerProfile);
