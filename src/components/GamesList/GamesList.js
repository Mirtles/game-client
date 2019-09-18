import React from "react";
import { Link } from "react-router-dom";
import request from "superagent";
import url from "../../constants";
import { connect } from "react-redux";

class GamesList extends React.Component {
  onClick = (e, gameId) => {
    request
      .put(`${url}/join/${gameId}`)
      .set("Authorization", `Bearer ${this.props.user}`)
      .catch(console.error);
  };

  render() {
    return (
      <div>
        <h1>
          {this.props.games.length > 0
            ? "Available rooms:"
            : "No rooms available"}
        </h1>
        {this.props.games.map((game, i) => (
          <div onClick={e => this.onClick(e, game.id)} key={i}>
            <Link to={`/lobby/${game.id}`}>{game.name}</Link>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    user: state.user
  };
};

export default connect(mapStateToProps)(GamesList);
