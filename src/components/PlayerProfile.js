import React, { Component } from "react";
import { connect } from "react-redux";
import { saveVote } from "../actions/questions";
import "../App.css";

class PlayerProfile extends Component {
  state = {
    choice: "",
    choidid: "",
  };
  backHome = () => {
    this.props.history.push(`/users/`);
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
    this.props.history.push(`/scoreboard/${qid}`);
  };
  render() {
    const { author, notanswered, questionToAnswer } = this.props;
    return (
      <div>
        <div align="center">
          <div className="paper">
            <p onClick={() => this.backHome()} className="homeLink">
              Back Home
            </p>
            {notanswered.length > 0 ? (
              <div className="playerProfile-inner">
                <h4 className="header-profile">{author.name} asks:</h4>
                <div className="mainDetails">
                  <div
                    className="profilePix"
                    style={{
                      backgroundImage: `url(${author.avatarURL})`,
                      backgroundSize: "105px 105px",
                    }}
                  ></div>
                  <div className="profileContent">
                    <h2 className="would-header">Would You Rather...</h2>
                    <div>
                      {
                        <div className="listProfile">
                          <input
                            type="radio"
                            name="one"
                            value={"optionOne"}
                            data-questid={questionToAnswer.id}
                            onChange={this.handleChange}
                          />
                          <label htmlFor="one">
                            {questionToAnswer.optionOne.text}
                          </label>
                          <br />
                          <input
                            type="radio"
                            name="one"
                            value={"optionTwo"}
                            data-questid={questionToAnswer.id}
                            onChange={this.handleChange}
                          />
                          <label htmlFor="one">
                            {questionToAnswer.optionTwo.text}
                          </label>
                          <br />
                        </div>
                      }

                      <button onClick={this.handleVote} className="view-rather">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

function mapStateToProps({ users, questions, userloggedin }, props) {
  const { question_id } = props.match.params;
  //const userid = questions[question_id].author;
  const author = users[questions[question_id].author];
  const questionToAnswer = questions[question_id];

  const answeredquest = Object.keys(users[userloggedin].answers);

  const notanswered = Object.values(questions)
    .filter((question) => !answeredquest.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    id: userloggedin,
    users,
    questions,
    notanswered,
    author,
    questionToAnswer,
  };
}

export default connect(mapStateToProps)(PlayerProfile);
