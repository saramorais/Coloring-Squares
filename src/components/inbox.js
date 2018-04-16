import React from "react";

function Inbox(props) {
  const changeBoxColor = function(e) {
    e.target.className = props.color;
  }
  return (
    <div className="white" onClick={changeBoxColor}></div>
  );
}

export default Inbox;