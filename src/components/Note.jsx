import React from "react";

function note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default note;
