import React from "react";

export default class ScorePage extends React.Component {
  render() {
    const users = this.props.game.users;
    const userOne = users.find(user => user.id === this.props.user.id);
    const userTwo = users.find(user => user.id !== this.props.user.id)
    const winner = users.find(user => {
      return user.isRoundWinner === true;
    });

    const rock = "✊";
    const paper = "✋";
    const scissors = "✌️";

    const gameEnd = winner && winner.score >= 2
    const userIsWinner = userOne === winner
    const userIsVictorious = gameEnd && userIsWinner

    return (
      <div>

        {!gameEnd ? null : (userIsVictorious ? < div className="victory">Victory!</div> : < div className="defeat">CRUSHING DEFEAT</div>)
        }
        {gameEnd ? null :
          <div className="novictory">

            {!winner ?
              "It's a draw!" :
              (userIsWinner ? "You win the round!" :
                `${winner.name} wins the round.`
              )}

          </div>}
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
        {
          gameEnd ? null :
            <button onClick={this.props.onClick}>Next Round</button>
        }
      </div >
    );
  }
}
