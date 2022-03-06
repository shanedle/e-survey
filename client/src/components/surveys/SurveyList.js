import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSurveys, deleteSurvey } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  deleteHandler(e, id) {
    e.preventDefault();
    this.props.deleteSurvey(id);
  }

  renderSurveys() {
    if (this.props.surveys < 1) {
      return (
        <div style={{ textAlign: "center" }}>
          <h3>No surveys yet!</h3>
          <Link className="btn blue darken-4" to="/surveys/new">
            Create Survey
          </Link>
        </div>
      );
    }

    return this.props.surveys.map((survey) => {
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
              onClick={(e) => this.deleteHandler(e, survey._id)}
            >
              <i className="material-icons">delete</i>
            </button>
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys: surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveyList
);
