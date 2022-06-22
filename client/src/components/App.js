import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";

const Surveys = () => <h1>heloo surveysrs</h1>

const SurveysNew = () => <h1>new surveysrs</h1>


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
  return <div className="container">
    <BrowserRouter>
        <div>
            <Header />
            <Route path="/" exact component={Landing}  />
            <Route path="/surveys" exact component={Surveys}  />
            <Route path="/surveys/new" component={SurveysNew}  />
        </div>
    </BrowserRouter>
  </div>;
};
}
export default connect(null, actions)(App);
