import React from "react";

function Colors(props) {
  return (
    <div className="colors">
      <p onClick={() => props.colorSelect("pink")} className="select select-pink">Pink</p>
      <p onClick={() => props.colorSelect("red")} className="select select-red">Red</p>
      <p onClick={() => props.colorSelect("yellow")} className="select select-yellow">Yellow</p>
      <p onClick={() => props.colorSelect("blue")} className="select select-blue">Blue</p>
      <p onClick={() => props.colorSelect("green")} className="select select-green">Green</p>
      <p onClick={() => props.colorSelect("brown")} className="select select-brown">Brown</p>
      <p onClick={() => props.colorSelect("black")} className="select select-black">Black</p>
      <p onClick={() => props.colorSelect("white")} className="select select-white">Eraser</p>
    </div>
  );
}

export default Colors;