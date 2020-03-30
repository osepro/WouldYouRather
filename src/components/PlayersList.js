import React from "react";
import UsersQuestions from "./UsersQuestions";

const PlayersList = () => {
  return (
    <div>
      {!this.props.users &&
        Object.keys(this.props.users).map((key, i) => (
          <div className="playerProfile" key={i}>
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
                <h4 className="would-header">Would you rather</h4>
                <div>
                  ...
                  <UsersQuestions question={this.props.users[key].questions} />
                  ...
                </div>
                <button
                  className="view-button"
                  onClick={() =>
                    this.props.viewPoll(this.props.id, this.props.users[key].id)
                  }
                >
                  View Poll
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlayersList;
