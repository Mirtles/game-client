import React from "react";

export default class ScoreBar extends React.Component {
  render() {

    const { round, name } = this.props.game
    const userOne = this.props.game.users[0]
    const userTwo = this.props.game.users[1]


    return <div className="scorebar">
      <div>
        Room: {name}
      </div>
      <div>
        Round: {round}
      </div>
      <div>
        {userOne.name}:{userOne.score} vs {userTwo.name}:{userTwo.score}
      </div>
    </div>
  }
} 