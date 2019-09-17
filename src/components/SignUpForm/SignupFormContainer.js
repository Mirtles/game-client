import React from "react";
import request from "superagent";

import SignUpForm from "./SignupForm";
import url from "../../constants";

export default class SignupFormContainer extends React.Component {
  state = {
    name: "",
    password: ""
  };

  signUp = (name, password) => {
    request
      .post(`${url}/user`)
      .send({ name, password })
      .catch(console.error);
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
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        value={this.state}
      />
    );
  }
}
