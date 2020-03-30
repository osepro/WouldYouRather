import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

class PlayerProfile extends Component {
  bachHome = id => {
    this.props.history.push(`/users/${id}`);
  };
  render() {
    return (
      <div>
        <div align="center">
          <div className="paper-1">
            <p
              onClick={() => this.bachHome(this.props.id)}
              className="homeLink"
            >
              Back Home
            </p>
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
                      <div className="topOne">
                        <h1>Would you do this</h1>
                        <div className="main-outter">
                          <div className="innner-pro">
                            <p className="counting">50%</p>
                          </div>
                        </div>
                      </div>
                      <div className="topTwo">
                        <h1>Would you do this</h1>
                        <div class="main-outter">
                          <div class="innner-pro">
                            <p class="counting">50%</p>
                          </div>
                        </div>
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
