import React, { Component } from "react";
import Inbox from "./inbox";

export default class Outbox extends Component {

  constructor(props) {
    super(props);
    this.renderInboxes = this.renderInboxes.bind(this);
  }

  renderInboxes() {
    var boxes = [];
    for(var i = 0; i < 324; i ++) {
      boxes.push(<Inbox key={i} color={this.props.color} />)
    }
    return (
      <div className="inbox">
        {boxes}
      </div>
    )
  }

  render() {
    return (
      <div className="outbox">
        {this.renderInboxes()}
      </div>
    )
  }

}