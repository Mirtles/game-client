import "./App.css";

import React from "react";
import { connect } from "react-redux";

import { setGames } from "./actions/games";
import GameFormContainer from "./components/AddGameForm/GameFormContainer";
import GamesListContainer from "./components/GamesList/GamesListContainer";
import LoginFormContainer from "./components/LoginForm/LoginFormContainer";
import url from "./constants";
import SignupFormContainer from "./components/SignUpForm/SignupFormContainer";
import GamePage from "../src/components/GamePage/GamePage";

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
        <GameFormContainer />
        <GamesListContainer />
        <SignupFormContainer />
        <LoginFormContainer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setGames
};

const mapStateToProps = state => {
  return {
    games: state.games
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
