import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import M from "materialize-css";
import Payments from "./Payments";

const Header = (props) => {
  useEffect(() => {
    let elems = document.querySelector(".sidenav");
    M.Sidenav.init(elems, {
      inDuration: 350,
      outDuration: 350,
      draggable: true,
      preventScrolling: true,
      edge: "right",
    });
  }, []);

  const renderContent = () => {
    switch (props.auth) {
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
            <div className="black-text">Credits: {props.auth.credits}</div>
          </li>,
          <li key="3">
            <a href="/api/logout" className="black-text">
              Logout
            </a>
          </li>,
        ];
    }
  };
  return (
    <nav className="white" style={{ padding: "0 50px" }}>
      <div className="nav-wrapper">
        <Link
          to={props.auth ? "/surveys" : "/"}
          className="left brand-logo black-text"
        >
          E-Survey
        </Link>

        <div>
          <ul id="slide-out" className="sidenav mobile-nav white black-text">
            <span data-target="slide-out" className="sidenav-close"></span>
            {renderContent()}
          </ul>
          <a
            href="#!"
            data-target="slide-out"
            className="right sidenav-trigger"
          >
            <i className="material-icons black-text">menu</i>
          </a>
        </div>
        <ul className="right hide-on-med-and-down">{renderContent()}</ul>
      </div>
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
