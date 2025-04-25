import React from "react";
import Image from "./img/people.svg";

import "./App.css";

function App() {
  function cliqueiNoBotao() {}

  return (
    <div>
      <img src={Image} alt="imagem-pessoas" />
      <textarea></textarea>
      <button onClick={cliqueiNoBotao}>Comentar</button>

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
}

export default App;
