import React from "react";
import request from "superagent";

import GameForm from "./GameForm";
import url from "../../constants";

export default class GameFormContainer extends React.Component {
  state = {
    name: ""
  };

  onSubmit = event => {
    event.preventDefault();

    const { name } = this.state;

    request
      .post(`${url}/game`)
      .send({ name })
      .then(() => {
        this.setState({ name: "" });
      })
      .catch(console.error);
  };

  onChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <GameForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        value={this.state.name}
      />
    );
  }
}
