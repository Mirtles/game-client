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
    this.props.login(this.state.name, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <LoginForm
        value={this.state}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default connect(
  null,
  { login }
)(LoginFormContainer);
