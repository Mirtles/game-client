import React from "react";
import { connect } from "react-redux";

import GamesListContainer from "./GamesList/GamesListContainer";
import GameFormContainer from "./AddGameForm/GameFormContainer";
import LoginFormContainer from "./LoginForm/LoginFormContainer";
import SignupFormContainer from "./SignUpForm/SignupFormContainer";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        {this.props.user ? (
          <div>
            <GamesListContainer /> <GameFormContainer />
          </div>
        ) : (
          <div>
            <SignupFormContainer /> <LoginFormContainer />
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

export default connect(mapStateToProps)(HomePage);
