import React from 'react'

export default class ScorePage extends React.Component {
  render() {
    const { round } = this.props.game
    const userOne = this.props.game.users[0]
    const userTwo = this.props.game.users[1]

    const rock = "✊"
    const paper = "✋"
    // const scissors = String.fromCodePoint(U+270C)

    return (<div>
      <p>Round: {round}</p>

      <div>
        <h1>{userOne.name}</h1>
        <div className="emoji">
          <span role="img" aria-label={userOne.current_choice}>
            {rock}{scissors}
          </span>
        </div>
      </div>

    </div>
    )
  }
}

// const rock = ✊
// const paper = ✋
// const scissors = ✌️
// const rock = (<div className="emoji">
// <span role="img" aria-label="rock">
//   ✊
// </span>
// </div>)
// const paper = (<div className="emoji">
// <span role="img" aria-label="paper">
//   ✋
// </span>
// </div>)
// const scissors = (<div className="emoji">
// <span role="img" aria-label="scissors">
//   ✌️
// </span>
// </div>)