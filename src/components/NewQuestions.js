import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";

class UserLogIn extends Component {
  state = {
    login: false
  };
  handleSubmit = () => {
    if (this.refs.selectUser) {
      this.setState({
        login: true
      });
    }
  };

  render() {
    return (
      <div>
        <div align="center">
          <div className="paper">
            <h1 className="header1">Create New Question</h1>
            <hr />
            <p className="textTop">Complete the question</p>
            <h4 className="textTop">Would you rather....</h4>
            <div className="form">
              <input
                type="text"
                placeholder="Enter Option One Text Here"
                className="inputBox"
              />
              <div class="container">
                <h2 className="orLine">Or</h2>
                <div className="line"></div>
              </div>
              <input
                type="text"
                placeholder="Enter Option Two Text Here"
                className="inputBox"
              />
              <button className="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UserLogIn);
