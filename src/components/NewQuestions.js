import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { createNewQuestion } from "../actions/questions";

class NewQuestions extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };
  onInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = () => {
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, id } = this.props;
    if (id) {
      dispatch(createNewQuestion({ id, optionOneText, optionTwoText }));
      this.setState(
        {
          optionOneText: "",
          optionTwoText: "",
        },
        () => this.props.history.push(`/users/${id}`)
      );
    } else {
      this.props.history.push("/");
      alert("Please login to creat a question");
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
                onChange={this.onInputChange}
                name="optionOneText"
                value={this.state.optionOneText}
              />
              <div className="container">
                <h2 className="orLine">Or</h2>
                <div className="line"></div>
              </div>
              <input
                type="text"
                placeholder="Enter Option Two Text Here"
                className="inputBox"
                onChange={this.onInputChange}
                name="optionTwoText"
                value={this.state.optionTwoText}
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

const mapStateToProps = ({ users, userloggedin }) => {
  return {
    users,
    id: userloggedin,
  };
};

export default connect(mapStateToProps)(NewQuestions);
