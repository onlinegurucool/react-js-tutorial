import React, { Component } from "react";

class TodoList extends Component {
    state = {
        list: [],
    };
    render() {
        return (
            <>
                <ul className="list-unstyled">
                    <li>
                        <input type="checkbox" id="checkbox" />
                        <label className="ml-2" for="checkbox">
                            Sample Todo
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" checked id="checkbox" />
                        <label
                            className="ml-2"
                            style={{ textDecoration: "line-through" }}
                            for="checkbox"
                        >
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
