import React from "react";

export default class ScoreBar extends React.Component {
  render() {

    const { round, name } = this.props.game
    const users = this.props.game.users;
    const userOne = users.find(user => user.id === this.props.user.id);
    const userTwo = users.find(user => user.id !== this.props.user.id)

    return <div className="scorebar">
      <div>
        Round: {round}
      </div>
      <div>
        Room: {name}
      </div>
      <div>
        Score: {userOne.name} {userOne.score} vs {userTwo.name} {userTwo.score}
      </div>
    </div>
  }
} 