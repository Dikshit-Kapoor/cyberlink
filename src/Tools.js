import React from "react";

function Tools(props) {
  return (
    <div className="card flex">
      <img src={props.icon} alt="icon image" />
      <h1>{props.heading}</h1>
      <p>{props.desc}</p>
    </div>
  );
}

export default Tools;