import React from "react";
import Inbox from "./inbox";

function Outbox(props) {

  var boxes = [];
  for(var i = 0; i < 324; i ++) {
    boxes.push(<Inbox key={i} color={props.color} />)
  }
  return (
    <div className="outbox">
      <div className="inbox">
        {boxes}
      </div>
    </div>
  );
}

export default Outbox;