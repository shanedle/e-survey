import React from "react";
import { Link } from "react-router-dom";

import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link
          className="btn-floating btn-large waves-effect waves-light red"
          to="/surveys/new"
        >
          <i className="material-icons blue darken-1">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
