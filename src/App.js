import React from "react";
import { Container } from "reactstrap";
import TodoList from "./Components/TodoList";

function App() {
    return (
        <div className="wrapper">
            <Container className="py-4">
                <h1>
                    Welcome to{" "}
                    <mark className="highlight">Online GuruCool</mark>
                </h1>
                <TodoList />
            </Container>
        </div>
    );
}

export default App;
