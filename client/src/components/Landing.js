import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return (
          <div style={{ textAlign: "center" }}>
            <h2>E-Survey</h2>
            <h6>Collect feedback from your users</h6>
            <a href="/auth/google" className="btn blue darken-1">
              Get started
            </a>
          </div>
        );
      default:
        return (
          <div style={{ textAlign: "center" }}>
            <h3>Welcome back to E-Survey!</h3>
            <Link className="btn blue darken-1" to="/surveys">
              View Surveys
            </Link>
          </div>
        );
    }
  }

  render() {
    return <>{this.renderContent()}</>;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Landing);
