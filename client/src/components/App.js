import "./App.css";

import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

import * as actions from "../actions";

const App = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, [props]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container">
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default connect(null, actions)(App);
