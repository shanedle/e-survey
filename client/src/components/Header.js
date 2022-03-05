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
    });
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav style={{ padding: "0 50px" }}>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            E-Survey
          </Link>

          <div>
            <ul
              ref={(Sidenav) => {
                this.Sidenav = Sidenav;
              }}
              id="slide-out"
              className="sidenav mobile-nav"
            >
              <span data-target="slide-out" className="sidenav-close">
                <i className="material-icons">close</i>
              </span>
              {this.renderContent()}
            </ul>
            <a
              href="#!"
              data-target="slide-out"
              className="right sidenav-trigger"
            >
              <i className="material-icons">menu</i>
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
