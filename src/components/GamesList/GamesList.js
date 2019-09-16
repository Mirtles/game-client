import React from "react"

export default class GamesList extends React.Component {
  render() {
    return (<div>
      <h1>{this.props.games.length > 0 ? "Available rooms:" : "No rooms available"}</h1>
      {this.props.games.map((game, i) => <div key={i}>
        {game.name}
      </div>)}
    </div>
    )
  }
}