import "./App.css";

import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

import { setGames } from "./actions/games";
import url from "./constants";
import GamePage from "../src/components/GamePage/GamePage";
import HomePage from "./components/HomePage";

class App extends React.Component {
  source = new EventSource(`${url}/stream`);

  componentDidMount() {
    this.source.onmessage = event => {
      const { data } = event;

      const games = JSON.parse(data);
      this.props.setGames(games);
    };
  }

  render() {
    return (
      <div>
        <Route path="/lobby/:gameId" component={GamePage} />
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setGames
};

const mapStateToProps = state => {
  return {
    games: state.games,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
