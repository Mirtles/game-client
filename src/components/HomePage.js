import React from "react";
import { connect } from "react-redux";

import GamesListContainer from "./GamesList/GamesListContainer";
import GameFormContainer from "./AddGameForm/GameFormContainer";
import LoginFormContainer from "./LoginForm/LoginFormContainer";
import SignupFormContainer from "./SignUpForm/SignupFormContainer";
import Header from "./Header/Header";
import { logOut } from "../actions/user";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.user.jwt ? (
          <div>
            <GameFormContainer />
            <GamesListContainer />
            <button onClick={this.props.logOut} className="quitGameButton">
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <SignupFormContainer />
            <LoginFormContainer />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { logOut }
)(HomePage);
