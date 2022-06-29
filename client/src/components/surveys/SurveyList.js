import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div className="card blue-grey darken-1" key={survey.id}>
          <div className="card-content white-text" key={survey.id}>
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
              <br />
            </p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
            {/* <Link to={`/surveys/${survey.id}`}>
                <button className="btn blue">Take Survey</button>
                </Link> */}
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    surveys: state.surveys,
  };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
