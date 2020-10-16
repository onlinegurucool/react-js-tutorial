import React, { Component } from "react";
// import CreateTodo from "./components/Todo/Create";
import TodoList from "./components/Todo/List";

class App extends Component {
    state = {
        count: 1,
        showList: true,
    };
    increment = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1,
        });
    };

    toggleList = () => {
        this.setState({
            ...this.state,
            showList: !this.state.showList,
        });
    };
    render() {
        return (
            <div className="wrapper">
                <div className="container my-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>Todo List</h3>
                            <button
                                className="btn btn-primary btn-sm mr-2"
                                onClick={this.increment}
                            >
                                Count{" "}
                                <span class="badge badge-light">
                                    {this.state.count}
                                </span>
                            </button>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={this.toggleList}
                            >
                                {this.state.showList ? "Hide" : "Show"} List
                            </button>
                        </div>
                        <div className="card-body">
                            {this.state.showList && (
                                <TodoList
                                    count={this.state.count}
                                />
                            )}

                            {/* <CreateTodo /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
