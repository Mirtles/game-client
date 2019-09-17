import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import GamesList from "./GamesList";
import GamePage from "../GamePage/GamePage";

class GamesListContainer extends React.Component {
  render() {
    return (
      <div>
        {/* <Route path="/lobby/:gameId" component={GamePage} /> */}

        {this.props.games.length === 0 ? (
          "No rooms available"
        ) : (
          <GamesList games={this.props.games} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps)(GamesListContainer);
