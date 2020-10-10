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
    };

    addTodo = () => {
        // add into todo
    };

    markComplete = () => {
        // mark todo complete
    };

    render() {
        let { list } = this.state;
        return (
            <>
                <ul className="list-unstyled">
                    {list.map(() => {
                        return (
                            <li>
                                <input type="checkbox" id="checkbox" />
                                <label className="ml-2" htmlFor="checkbox">
                                    Sample Todo
                                </label>
                            </li>
                        );
                    })}

                    <li>
                        <input type="checkbox" id="checkbox" />
                        <label className="ml-2 completed" htmlFor="checkbox">
                            Sample Todo
                        </label>
                    </li>
                </ul>
                <input
                    placeholder="Eg. Subscribe Online GuruCool"
                    className="form-control"
                />
                <button className="btn btn-primary btn-block mt-2">
                    Add Todo
                </button>
            </>
        );
    }
}

export default TodoList;
