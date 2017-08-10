import React, { Component } from "react";
import Outbox from "./outbox";
import Colors from "./colors";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      colorSelected: "white"
    }
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(color) {
    this.setState({colorSelected: color});
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Coloring Squares</h1>
        <Colors colorSelect={this.changeColor} />
        <Outbox color={this.state.colorSelected} />
      </div>
    );
  }

}