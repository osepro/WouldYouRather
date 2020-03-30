import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

class PlayerProfile extends Component {
  bachHome = id => {
    this.props.history.push(`/users/${id}`);
  };
  render() {
    console.log(this.props.notanswered[0]);
    return (
      <div>
        <div align="center">
          <div className="paper">
            <p
              onClick={() => this.bachHome(this.props.id)}
              className="homeLink"
            >
              Back Home
            </p>
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
                          {
                            //this.props.notanswered.map((quest, i) => (
                            <div className="listProfile" key={i}>
                              <input
                                type="radio"
                                name="one"
                                value={this.props.notanswered[0].optionOne.text}
                              />
                              <label htmlFor="one">
                                {this.props.notanswered[0].optionOne.text}
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="one"
                                value={this.props.notanswered[0].optionTwo.text}
                              />
                              <label htmlFor="one">
                                {this.props.notanswered[0].optionTwo.text}
                              </label>
                              <br />
                            </div>
                            //))
                          }

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
  const answeredquest = Object.keys(users[id].answers);

  const notanswered = Object.values(questions)
    .filter(question => !answeredquest.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    id,
    users: users,
    questions: questions,
    notanswered
  };
}

export default connect(mapStateToProps)(PlayerProfile);
