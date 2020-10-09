import React, { Component } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container my-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>Todo List</h3>
                        </div>
                        <div className="card-body">
                            <TodoList />
                            {/* <CreateTodo /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
