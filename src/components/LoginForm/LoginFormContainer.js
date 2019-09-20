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
        {this.props.user.message ? (
          <p className="errorMessage">{this.props.user.message}</p>
        ) : null}
        <LoginForm
          value={this.state}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  // null,
  { login }
)(LoginFormContainer);
