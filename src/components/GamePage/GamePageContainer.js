import React from "react";
import { connect } from "react-redux";
import request from "superagent";

import GamePage from "./GamePage";
import ScorePage from "../ScorePage/ScorePage";
import url from "../../constants";

class GamePageContainer extends React.Component {
  onClick = (e, choice) => {
    console.log("i am clicked");
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

  render() {
    const game =
      this.props.games.length > 0
        ? this.props.games.find(
          game => game.id === parseInt(this.props.match.params.gameId)
        )
        : null;

    return (
      <div>
        {!game ? (
          "Loading... "
        ) : game.users.length === 1 ? (
          "Waiting for opponent"
        ) : game.users.find(user => user.isRoundWinner !== null) ? (
          <ScorePage game={game} onClick={this.onScorePage} />
        ) : (
                <GamePage onClick={this.onClick} game={game} />
              )

        }
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
