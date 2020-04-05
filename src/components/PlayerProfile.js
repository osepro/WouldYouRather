import React, { Component } from "react";
import { connect } from "react-redux";
import { saveVote } from "../actions/questions";
import "../App.css";

class PlayerProfile extends Component {
  state = {
    choice: "",
    choidid: "",
  };
  bachHome = (id) => {
    this.props.history.push(`/users/${id}`);
  };

  handleChange = (e) => {
    this.setState({
      choice: e.target.value,
      choiceid: e.target.dataset.questid,
    });
  };

  handleVote = (e) => {
    e.preventDefault();
    const qid = this.state.choiceid;
    const answer = this.state.choice;
    const { dispatch, id } = this.props;
    dispatch(saveVote({ qid, answer, id }));
    this.props.history.push(`/scoreboard/${id}/${qid}`);
  };
  render() {
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
            {this.props.notanswered.length > 0 ? (
              Object.keys(this.props.users)
                .filter((user) => this.props.users[user].id === this.props.id)
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
                          backgroundSize: "105px 105px",
                        }}
                      ></div>
                      <div className="profileContent">
                        <h2 className="would-header">Would You Rather...</h2>
                        <div>
                          {
                            <div className="listProfile" key={i}>
                              <input
                                type="radio"
                                name="one"
                                value={"optionOne"}
                                data-questid={this.props.notanswered[0].id}
                                onChange={this.handleChange}
                              />
                              <label htmlFor="one">
                                {this.props.notanswered[0].optionOne.text}
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="one"
                                value={"optionTwo"}
                                data-questid={this.props.notanswered[0].id}
                                onChange={this.handleChange}
                              />
                              <label htmlFor="one">
                                {this.props.notanswered[0].optionTwo.text}
                              </label>
                              <br />
                            </div>
                          }

                          <button
                            onClick={this.handleVote}
                            className="view-rather"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <h4 className="header-profile" style={{ textAlign: "center" }}>
                No question to answer
              </h4>
            )}
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
    .filter((question) => !answeredquest.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    id,
    users: users,
    questions: questions,
    notanswered,
  };
}

export default connect(mapStateToProps)(PlayerProfile);
