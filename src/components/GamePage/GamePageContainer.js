import React from "react";
import { connect } from "react-redux";
import request from "superagent";
import { Link } from 'react-router-dom'

import GamePage from "./GamePage";
import ScorePage from "../ScorePage/ScorePage";
import url from "../../constants";
import ScoreBar from "../ScoreBar/ScoreBar"

class GamePageContainer extends React.Component {
  onChoice = (e, choice) => {
    request
      .put(`${url}/choose/${choice}`)
      .set("Authorization", `Bearer ${this.props.user}`)
      .catch(console.error);
  };

  onScorePage = () => {
    request
      .put(`${url}/round`)
      .set("Authorization", `Bearer ${this.props.user}`)
      .catch(console.error);
  };

  onQuitGame = () => {
    request
      .put(`${url}/reset`)
      .set("Authorization", `Bearer ${this.props.user}`)
      .catch(console.error);
  };

  render() {
    const game =
      this.props.games.length > 0
        ? this.props.games.find(
          game => game.id === parseInt(this.props.match.params.gameId)
        )
        : null;

    return (
      <div>
        {!game ? null : (game.users.length === 2 ? <ScoreBar game={game} /> : null)}
        {!game ? (
          "Loading... "
        ) : game.users.length < 2 ? (
          "Waiting for opponent"
        ) : game.users.find(user => user.isRoundWinner !== null) ? (
          <ScorePage
            game={game}
            onClick={this.onScorePage}
            onQuitGame={this.onQuitGame}
          />
        ) : (
                <GamePage
                  onClick={this.onChoice}
                  game={game}
                />
              )}
        <Link onClick={this.onQuitGame} to={`/`}>
          <button>Quit Game</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    games: state.games
  };
}

export default connect(mapStateToProps)(GamePageContainer);
