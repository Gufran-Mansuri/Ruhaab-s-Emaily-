import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validaetEmails from "../../utils/validateEmails";
import surveyFormFiels from "./surveyFormFiels";



class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        {surveyFormFiels.map((field) => {
          return (
            <Field
              key={field.key}
              label={field.label}
              name={field.name}
              component={SurveyField}
            />
          );
        })}
      </div>
    );
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveyReview)}
        >
          {this.renderFields()}
          <Link to='/surveys' className="red btn-flat white-text">
              Cancel

          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}
function validate(values) {
  const errors = {};
  errors.recipients = validaetEmails(values.recipients || "");
  surveyFormFiels.forEach((field) => {
    
    if (!values[field.name]) {
      errors[field.name] = `Please enter a ${field.label}`;
      
    }
   
  });
  return errors;
}

export default reduxForm({
  form: "surveyForm",
  validate,
  destroyOnUnmount: false
  
})(SurveyForm);
