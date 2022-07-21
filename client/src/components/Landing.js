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
          <div className="center">
            <h4>A simple & powerful online survey tool.</h4>
            <h5 className="light">
              Sign up now to collect feedback from your users.
            </h5>
            <a href="/auth/google" className="btn blue darken-1">
              Get started
            </a>
          </div>
        );
      default:
        return (
          <div className="center">
            <h3>Welcome back to E-Survey!</h3>
            <Link className="btn blue darken-1" to="/surveys">
              View Surveys
            </Link>
          </div>
        );
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <section className="section valign-wrapper">
            <div className="row">
              <div>{this.renderContent()}</div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Landing);
