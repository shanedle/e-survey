import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchSurveys, deleteSurvey } from "../../actions";

const SurveyList = ({ fetchSurveys, surveys, deleteSurvey }) => {
  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys]);

  const deleteHandler = (e, id) => {
    e.preventDefault();
    deleteSurvey(id);
  };

  const renderSurveys = () => {
    if (surveys < 1) {
      return (
        <div style={{ textAlign: "center" }}>
          <h5>
            You haven't created any surveys yet. To get started, click the{" "}
            <b>New Survey</b> button or the <b>+</b> button at the bottom right
            of the page.
          </h5>
          <Link className="btn blue darken-1" to="/surveys/new">
            New Survey
          </Link>
        </div>
      );
    }

    return surveys.reverse().map((survey) => {
      return (
        <div className="card" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>

          <div className="card-action">
            <button
              className="right"
              onClick={(e) => deleteHandler(e, survey._id)}
            >
              <i className="material-icons">delete</i>
            </button>
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  };

  return <div>{renderSurveys()}</div>;
};

function mapStateToProps({ surveys }) {
  return { surveys: surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveyList
);
