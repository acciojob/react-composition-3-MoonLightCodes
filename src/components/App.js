import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css";

function App() {
  return (
    <div>
      <Tooltip text="This is a Tootip!">
        <button>Hover over me</button>
      </Tooltip>

      <Tooltip text="This is a Tootip">
        <p>Hover over this text</p>
      </Tooltip>
    </div>
  );
}

export default App;
