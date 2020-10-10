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
                    {list.map((listObj,index) => {
                        let {todo,status} = listObj;
                        return (
                            <li key={index}>
                                <input type="checkbox" checked={status ? "checked" : ""}  id="checkbox" />
                                <label className={status ? "ml-2 completed" : "ml-2"} htmlFor="checkbox">
                                    {todo}
                                </label>
                            </li>
                        );
                    })}
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
