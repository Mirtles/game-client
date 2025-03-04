import React from "react";
import { connect } from "react-redux";
import request from "superagent";
import { Link } from "react-router-dom";

import GamePage from "./GamePage";
import ScorePage from "../ScorePage/ScorePage";
import url from "../../constants";
import ScoreBar from "../ScoreBar/ScoreBar";
import Header from "../Header/Header";

class GamePageContainer extends React.Component {
  onChoice = (e, choice) => {
    request
      .put(`${url}/choose/${choice}`)
      .set("Authorization", `Bearer ${this.props.user.jwt}`)
      .catch(console.error);
  };

  onScorePage = () => {
    request
      .put(`${url}/round`)
      .set("Authorization", `Bearer ${this.props.user.jwt}`)
      .catch(console.error);
  };

  onQuitGame = () => {
    request
      .put(`${url}/reset`)
      .set("Authorization", `Bearer ${this.props.user.jwt}`)
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
      <div className="gamePageContainer">
        {!game ? null : game.users.length === 2 ? (
          <ScoreBar game={game} user={this.props.user} />
        ) : null}
        {!game ? (
          "Loading... "
        ) : game.users.length < 2 ? (
          <div>
            <Header />
            <p className="waiting">Waiting for opponent</p>
          </div>
        ) : game.users.find(user => user.isRoundWinner !== null) ? (
          <ScorePage
            game={game}
            onClick={this.onScorePage}
            user={this.props.user}
          />
        ) : (
          <GamePage
            onClick={this.onChoice}
            game={game}
            user={this.props.user}
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
