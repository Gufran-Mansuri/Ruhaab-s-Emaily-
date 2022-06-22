import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderConternt() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <React.Fragment>
          <li><Payments/></li>
          <li style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>
          <li>
            <a href="/api/logout">Logout</a>
          </li>
          </React.Fragment>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? "/surveys" : "/"} className="brand-logo">
            Ruhab's Emaily
          </Link>
          <ul className="right">{this.renderConternt()}</ul>
          
        </div>
      </nav>
      
    );
  }
}

function mapSatteToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapSatteToProps)(Header);
