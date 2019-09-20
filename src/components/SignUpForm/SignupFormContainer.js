import React from "react";
import request from "superagent";

import SignUpForm from "./SignupForm";
import url from "../../constants";
import { errorMessage } from "../../actions/user";
import { connect } from "react-redux";

class SignupFormContainer extends React.Component {
  state = {
    name: "",
    password: ""
  };

  signUp = (name, password) => {
    request
      .post(`${url}/user`)
      .send({ name, password })
      .then(res => this.props.errorMessage(res.body))
      .catch(error => {
        console.error(error);
      });
  };

  onSubmit = event => {
    event.preventDefault();
    this.signUp(this.state.name, this.state.password);
    this.setState({
      name: "",
      password: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.props.error ? (
          <p className="errorMessage">{this.props.error.body}</p>
        ) : null}
        <SignUpForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          value={this.state}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    games: state.games,
    error: state.error
  };
}

export default connect(
  mapStateToProps,
  { errorMessage }
)(SignupFormContainer);
