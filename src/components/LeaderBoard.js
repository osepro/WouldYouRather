import React, { Component } from "react";
import ResultsBoard from "./ResultsBoard";
import { connect } from "react-redux";

class LeaderBoard extends Component {
  backHome = (id) => {
    this.props.history.push(`/users/${id}`);
  };
  render() {
    return (
      <div align="center">
        <div className="paper">
          <p onClick={() => this.backHome(this.props.id)} className="homeLink">
            Back Home
          </p>
          <div>
            {Object.keys(this.props.users).map((key, i) => (
              <div className="leaderProfile" key={i}>
                <div className="mainDetails gridContainer">
                  <div
                    className="leaderPix"
                    style={{
                      backgroundImage: `url(${this.props.users[key].avatarURL})`,
                      backgroundSize: "105px 105px",
                    }}
                  ></div>
                  <div className="mainCenter">
                    <h1 className="leaderName">{this.props.users[key].name}</h1>
                    <div>
                      <ResultsBoard user={this.props.users[key].id} />
                    </div>
                  </div>
                  <div className="leaderScore" align="center">
                    <ul className="leaderList">
                      <li className="topList">Score</li>
                      <li className="bottomList">
                        {Object.keys(this.props.users[key].answers).length +
                          this.props.users[key].questions.length}
                      </li>
                    </ul>
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

function mapStateToProps({ questions, users }, props) {
  const { id } = props.match.params;
  return {
    id,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
