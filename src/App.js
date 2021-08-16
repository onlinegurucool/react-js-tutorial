import React from "react";
import ClickedCounter from "./Components/ClickedCounter";
import HowerCount from "./Components/HoverCount";

function App() {
  return (
    <div className="wrapper p-2">
      <ClickedCounter name="Test" />
      <hr />
      <HowerCount />
    </div>
  );
}

export default App;
