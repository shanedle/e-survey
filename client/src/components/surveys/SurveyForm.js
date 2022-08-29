import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

import SurveyField from "./SurveyField";
import formFields from "./formFields";

import validateEmails from "../../utils/validateEmails";

const SurveyForm = (props) => {
  const renderFields = () => {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
        {renderFields()}
        <Link
          to="/surveys"
          style={{ marginTop: "30px" }}
          className="red darken-4 btn-flat white-text left"
        >
          Cancel
          <i className="material-icons right">clear</i>
        </Link>
        <button
          type="submit"
          style={{ marginTop: "30px" }}
          className="blue darken-4 btn-flat right white-text"
        >
          Next
          <i className="material-icons right">arrow_forward</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ label, name }) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let grammarPolice = "a";
    if (vowels.indexOf(label[0].toLowerCase()) !== -1) {
      grammarPolice = "an";
    }

    if (!values[name]) {
      errors[name] = `You must provide ${grammarPolice} ${label.toLowerCase()}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
