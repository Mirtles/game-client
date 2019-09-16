import React from "react";

export default class GameForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          placeholder="Room name"
          onChange={this.props.onChange}
          value={this.props.value}
        ></input>
        <button>Create room</button>
      </form>
    );
  }
}
