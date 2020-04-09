import React, { Component } from "react";
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
              <Link to="/">Please sign in to continue</Link>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
