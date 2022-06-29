import React from "react";
import { connect } from "react-redux";
import surveyFormFiels from "./surveyFormFiels";
import * as actions from "../../actions";
import {withRouter} from "react-router-dom";

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

const SurveyReview = ({ onCancle, formValues, submitSurvey, history }) => {

  const reviewFields = surveyFormFiels.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h1>Survey Review</h1>
      {reviewFields}
      <button
        className="yellow white-text darken-3 btn-flat"
        onClick={onCancle}
      >
        Back
      </button>
      <button className="teal btn-flat right white-text" type="submit" onClick={() => submitSurvey(formValues, history)}>
        Submit Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
