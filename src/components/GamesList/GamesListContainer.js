import React from "react";
import { connect } from "react-redux";

import GamesList from "./GamesList";

class GamesListContainer extends React.Component {
  render() {
    return (
      <div>
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
