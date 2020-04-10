import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { Link } from "react-router-dom";

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <div align="center">
          <div className="paper">
            <h1
              style={{ color: "#FF0000", fontSize: "56px", fontWeight: "bold" }}
            >
              404 Error
            </h1>
            <h1 className="header-error">
              <Link to="/users/">Click to view available questions</Link>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userloggedin }) => {
  return {
    userloggedin,
  };
};

export default connect(mapStateToProps)(ErrorPage);
