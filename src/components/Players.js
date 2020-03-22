import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import UsersQuestions from "./UsersQuestions";
import PlayerProfile from "./PlayerProfile";

class Players extends Component {
  viewPoll = id => {
    this.props.history.push(`/profile/${id}`);
  };
  render() {
    console.log(this.props.questions);
    console.log(this.props.users);
    return (
      <div>
        <div>
          <div align="center">
            <div className="paper">
              <div className="headerPlay">
                <ul className="questionHeader">
                  <li>
                    <a href="#">Unanswered Questions</a>
                  </li>
                  <li>
                    <a href="#">Answered Questions</a>
                  </li>
                </ul>
              </div>
              <div>
                {Object.keys(this.props.users).map((key, i) => (
                  <div className="playerProfile" key={i}>
                    <h4 className="header-profile">
                      {this.props.users[key].name} asks:
                    </h4>
                    <div className="mainDetails">
                      <div
                        className="profilePix"
                        style={{
                          backgroundImage: `url(${this.props.users[key].avatarURL})`,
                          backgroundSize: "95px 95px"
                        }}
                      ></div>
                      <div className="profileContent">
                        <h4 className="would-header">Would you rather</h4>
                        <div>
                          ...
                          <UsersQuestions
                            question={this.props.users[key].questions}
                          />
                          ...
                        </div>
                        <button
                          className="view-button"
                          onClick={() =>
                            this.viewPoll(this.props.users[key].id)
                          }
                        >
                          View Poll
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p></p>
            </div>
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

export default connect(mapStateToProps)(Players);
