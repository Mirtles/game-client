import React from "react";
import { Link } from "react-router-dom";

export default class ScorePage extends React.Component {
  render() {
    const users = this.props.game.users;
    const userOne = users[0];
    const userTwo = users[1];
    const winner = users.find(user => {
      return user.isRoundWinner === true;
    });

    const rock = "✊";
    const paper = "✋";
    const scissors = "✌️";

    const gameEnd = winner && winner.score >= 2
    console.log(gameEnd)
    return (
      <div>

        {gameEnd ? <div className="victory">Victory! {winner.name} wins the game!</div> :
          <div className="novictory">{!winner ?
            "It's a draw!" :
            `${winner.name} wins!`}</div>}

        <div>
          <h2>{userOne.name}</h2>
          <div>
            <span aria-label={userOne.current_choice}>
              {userOne.current_choice === "rock"
                ? rock
                : userOne.current_choice === "paper"
                ? paper
                : scissors}
            </span>
          </div>
        </div>
        <div>
          <h2>{userTwo.name}</h2>
          <div>
            <span aria-label={userTwo.current_choice}>
              {userTwo.current_choice === "rock"
                ? rock
                : userTwo.current_choice === "paper"
                ? paper
                : scissors}
            </span>
          </div>
        </div>
        {gameEnd ? null :
          <button onClick={this.props.onClick}>Next Round</button>}
        <Link onClick={this.props.onQuitGame} to={`/`}>
          <button>Quit Game</button>
        </Link>
      </div>
    );
  }
}
