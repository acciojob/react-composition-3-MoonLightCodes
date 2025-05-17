import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css";

function App() {
  return (
    <div>
      <Tooltip text="Tooltip for Heading">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <Tooltip text="Tooltip for Paragraph">
        <p>Hover over this paragraph</p>
      </Tooltip>
    </div>
  );
}

export default App;
