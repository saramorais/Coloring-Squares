import React, { Component } from "react";

export default class Colors extends Component {
  render() {
    return (
      <div className="colors">
        <p onClick={() => this.props.colorSelect("pink")} className="select select-pink">Pink</p>
        <p onClick={() => this.props.colorSelect("red")} className="select select-red">Red</p>
        <p onClick={() => this.props.colorSelect("yellow")} className="select select-yellow">Yellow</p>
        <p onClick={() => this.props.colorSelect("blue")} className="select select-blue">Blue</p>
        <p onClick={() => this.props.colorSelect("green")} className="select select-green">Green</p>
        <p onClick={() => this.props.colorSelect("brown")} className="select select-brown">Brown</p>
        <p onClick={() => this.props.colorSelect("black")} className="select select-black">Black</p>
        <p onClick={() => this.props.colorSelect("white")} className="select select-white">Eraser</p>
      </div>
    );
  }
}