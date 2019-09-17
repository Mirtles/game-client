import React from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { login } from "../../actions/user";

class LoginFormContainer extends React.Component {
  state = {
    name: "",
    password: ""
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return <LoginForm value={this.state} />;
  }
}

export default (null, { login })(LoginFormContainer);
