import React from "react";
import { Container } from "reactstrap";
import Demo from "./Components/Demo";

function App() {
    return (
        <div className="wrapper">
            <Container className="py-4">
                <h1>
                    Welcome to{" "}
                    <mark className="highlight">Online GuruCool</mark>
                </h1>
                <Demo />
            </Container>
        </div>
    );
}

export default App;
