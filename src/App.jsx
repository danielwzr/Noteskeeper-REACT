import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

function App() {
  const [notas, setNotas] = useState([]);
  return (
    <div>
      <Header notas={notas} setNotas={setNotas} />
      {
      notas.map((nota, index) => {
        return <Note classname="note" title={nota.title} description={nota.description} key={index} />
      })
      }

      
      <Footer />
    </div>
  );
}

export default App;
