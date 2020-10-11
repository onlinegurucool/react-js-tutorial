import React, { Component } from "react";

import "./Styles.css";
class TodoList extends Component {
    state = {
        list: [
            {
                todo: "Bring Milk",
                status: false,
            },
            {
                todo: "Read Book",
                status: true,
            },
        ],
        input: "",
    };

    addTodo = () => {
        // add into todo
        this.setState({
            ...this.state,
            list: [
                ...this.state.list,
                {
                    todo: this.state.input,
                    status: false,
                },
            ],
            input: "",
        });
    };

    markComplete = (index) => {
        // mark todo complete
        let temp = this.state.list;
            temp[index].status = !temp[index].status;
        this.setState({
            ...this.state,
            list: temp
        })
    };

    handelChange = (e) => {
        this.setState({
            ...this.state,
            input: e.target.value,
        });
    };
    

    render() {
        let { list, input } = this.state;
        return (
            <>
                {/* {JSON.stringify(this.state)} */}
                <ul className="list-unstyled">
                    {list.map((listObj, index) => {
                        let { todo, status } = listObj;
                        return (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    checked={status ? "checked" : ""}
                                    id={`checkbox_${index}`}
                                    onChange={() => this.markComplete(index)}
                                />
                                <label
                                    className={
                                        status ? "ml-2 completed" : "ml-2"
                                    }
                                    htmlFor={`checkbox_${index}`}
                                >
                                    {todo}
                                </label>
                            </li>
                        );
                    })}
                </ul>
                <input
                    placeholder="Eg. Subscribe Online GuruCool"
                    className="form-control"
                    onChange={(event) => this.handelChange(event)}
                    value={input}
                />
                <button
                    className="btn btn-primary btn-block mt-2"
                    onClick={this.addTodo}
                >
                    Add Todo
                </button>
            </>
        );
    }
}

export default TodoList;
