import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import M from "materialize-css";
import Payments from "./Payments";

class Header extends Component {
  componentDidMount() {
    let elems = document.querySelector(".sidenav");
    M.Sidenav.init(elems, {
      inDuration: 350,
      outDuration: 350,
      draggable: true,
      preventScrolling: true,
      edge: "right",
    });
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return (
          <li>
            <a href="/auth/google" className="black-text">
              Login with Google
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            <div className="black-text">Credits: {this.props.auth.credits}</div>
          </li>,
          <li key="3">
            <a href="/api/logout" className="black-text">
              Logout
            </a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav className="white" style={{ padding: "0 50px" }}>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo black-text"
          >
            E-Survey
          </Link>

          <div>
            <ul id="slide-out" className="sidenav mobile-nav white black-text">
              <span data-target="slide-out" className="sidenav-close"></span>
              {this.renderContent()}
            </ul>
            <a
              href="#!"
              data-target="slide-out"
              className="right sidenav-trigger"
            >
              <i className="material-icons black-text">menu</i>
            </a>
          </div>
          <ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
