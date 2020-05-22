import React from "react";
import { Container } from "reactstrap";
import Demo from "./Components/demo";

function App() {
    return (
        <div className="wrapper">
            <Container className="py-4">
                <h1 className="mb-4">
                    Welcome to 
                    <mark className="highlight">Online GuruCool</mark>
                </h1>
                <Demo />
            </Container>
        </div>
    );
}

export default App;
