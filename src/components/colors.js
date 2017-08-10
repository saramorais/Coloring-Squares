import React, { Component } from "react";

export default class Colors extends Component {
  render() {
    return (
      <div className="colors">
        <p onClick={() => this.props.colorSelect("pink")} className="select select-pink" color="Pink">Pink</p>
        <p onClick={() => this.props.colorSelect("red")} className="select select-red" color="Red">Red</p>
        <p onClick={() => this.props.colorSelect("yellow")} className="select select-yellow" color="Yellow">Yellow</p>
        <p onClick={() => this.props.colorSelect("blue")} className="select select-blue" color="Blue">Blue</p>
        <p onClick={() => this.props.colorSelect("green")} className="select select-green" color="Green">Green</p>
        <p onClick={() => this.props.colorSelect("brown")} className="select select-brown" color="Brown">Brown</p>
        <p onClick={() => this.props.colorSelect("black")} className="select select-black" color="Black">Black</p>
        <p onClick={() => this.props.colorSelect("white")} className="select" color="White">White</p>
      </div>
    );
  }
}