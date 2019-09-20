import "./header.css"

import React from "react"
import logo from "./logo.svg"

export default class Header extends React.Component {
  render() {
    return <header className="header">
      <img className="logo" alt="Fist logo" src={logo} />
      <h1>Rock Paper Scissors</h1>
    </header>
  }
} 