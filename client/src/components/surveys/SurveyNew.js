import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyReview from "./SurveyReview";
import {reduxForm} from "redux-form";

class SurveyNew extends Component {
  state = { formReview: false };
  renderContent() {
    if (this.state.formReview) {
      return <SurveyReview
      onCancle={() => {
        this.setState({ formReview: false });
      }} />;
    }
    return <SurveyForm
    onSurveyReview={() => {
        this.setState({ formReview: true });
    }} />;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
    form: "surveyForm"
})(SurveyNew);
