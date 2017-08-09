import React, { Component } from "react";

export default class Inbox extends Component {

  constructor(props) {
    super(props);
    this.changeBoxColor = this.changeBoxColor.bind(this);
  }

  changeBoxColor(e) {
    e.target.className = this.props.color;
  }

  render() {
    return (
      <div className="white" onClick={this.changeBoxColor}></div>
    );
  }

}