import React, { Component } from "react";

export default class Colors extends Component {
  render() {
    return (
      <div className="colors">
        <div onClick={() => this.props.colorSelect("pink")} className="select-pink" color="Pink">Pink</div>
        <div onClick={() => this.props.colorSelect("red")} className="select-red" color="Red">Red</div>
        <div onClick={() => this.props.colorSelect("yellow")} className="select-yellow" color="Yellow">Yellow</div>
        <div onClick={() => this.props.colorSelect("blue")} className="select-blue" color="Blue">Blue</div>
        <div onClick={() => this.props.colorSelect("green")} className="select-green" color="Green">Green</div>
        <div onClick={() => this.props.colorSelect("brown")} className="select-brown" color="Brown">Brown</div>
        <div onClick={() => this.props.colorSelect("black")} className="select-black" color="Black">Black</div>
        <div onClick={() => this.props.colorSelect("white")} color="White">White</div>
      </div>
    );
  }
}