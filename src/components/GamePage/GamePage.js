import React from "react";

export default class GamePage extends React.Component {
  render() {
    return (
      <div className="imageContainer">
        <div className="emoji">
          <span role="img" aria-label="scissors">
            ✌️
          </span>
        </div>
        <div className="emoji">
          <span role="img" aria-label="paper">
            ✋
          </span>
        </div>
        <div className="emoji">
          <span role="img" aria-label="rock">
            ✊
          </span>
        </div>
      </div>
    );
  }
}
