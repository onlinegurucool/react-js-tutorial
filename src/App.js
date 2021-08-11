import React from "react";
import { Container } from "reactstrap";
import ClickedCounter from "./Components/ClickedCounter";
import HowerCount from "./Components/HoverCount";

function App() {
  return (
    <div className="wrapper">
      <Container className="py-4">
        <ClickedCounter />
        <hr />
        <HowerCount />
      </Container>
    </div>
  );
}

export default App;
