import React from "react";

export default class GamePage extends React.Component {
  render() {
    return (
      <div>
        <div className="imageContainer">

          <div onClick={e => this.props.onClick(e, "rock")} className="emoji">
            <span role="img" aria-label="rock">
              ✊
            </span>
          </div>

          <div onClick={e => this.props.onClick(e, "paper")} className="emoji">
            <span role="img" aria-label="paper">
              ✋
            </span>
          </div>

          <div onClick={e => this.props.onClick(e, "scissors")} className="emoji">
            <span role="img" aria-label="scissors">
              ✌️
            </span>
          </div>

        </div>
      </div>
    );
  }
}
