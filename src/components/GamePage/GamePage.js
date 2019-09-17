import React from "react";

export default class GamePage extends React.Component {
  render() {
    return (
      <div className="imageContainer">
        <div>
          <img
            src="https://i.pinimg.com/originals/c5/07/47/c50747c1d7746c45bda94ac9f291fbbd.png"
            alt="rock"
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/1061/1924/products/Raised_Hand_With_Fingers_Splayed_Emoji_Icon_ios10_large.png?v=1542436022"
            alt="paper"
          />
        </div>
        <div>
          <img
            src="https://emojis.wiki/emoji-pics/google/victory-hand-google.png"
            alt="scissors"
          />
        </div>
      </div>
    );
  }
}
