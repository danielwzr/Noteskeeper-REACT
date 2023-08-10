import React from "react";

function header({ notas, setNotas }) {
  const novaNota = { title: "Futebol", description: "15:30" };
  const notascopy = [...notas, novaNota];

  return (
    <header style={{display:'flex', justifyContent: 'space-between'}}>
      <h1>Keeper App</h1>
      <button
        onClick={() => {
          setNotas(notascopy);
        }}
        style={{
          background: "white",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          fontSize: "32px",
          cursor: 'pointer'
        }}
      >
        +
      </button>
    </header>
  );
}

export default header;
