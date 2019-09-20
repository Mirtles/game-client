import React from "react";

export default class ScoreBar extends React.Component {
  render() {
    // console.log(this.props.game);
    const { round, name } = this.props.game;
    const users = this.props.game.users;
    const userOne = users.find(user => user.id === this.props.user.id);
    // console.log(userOne);

    const userTwo = users.find(user => user.id !== this.props.user.id);

    return (
      <div>
        {userOne ? (
          <div className="scoreBar">
            <div className="round">Round: {round}</div>
            <div className="room">{name}</div>
            <div className="score">
              Score: {userOne.score} vs {userTwo.score}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
