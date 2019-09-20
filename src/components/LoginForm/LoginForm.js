import React from "react";

export default class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.props.value.name}
          onChange={this.props.onChange}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.props.value.password}
          onChange={this.props.onChange}
        ></input>
        <button>Log in</button>
      </form>
    );
  }
}
