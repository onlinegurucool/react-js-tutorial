import React, { useState } from "react";

import "./Styles.css";
const TodoList = () => {
    let [state, setState] = useState({
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
    });

    const addTodo = () => {
        // add into todo
        setState({
            ...state,
            list: [
                ...state.list,
                {
                    todo: state.input,
                    status: false,
                },
            ],
            input: "",
        });
    };

    const markComplete = (index) => {
        // mark todo complete
        let temp = state.list;
        temp[index].status = !temp[index].status;
        setState({
            ...state,
            list: temp,
        });
    };

    const handelChange = (e) => {
        setState({
            ...state,
            input: e.target.value,
        });
    };

    let { list, input } = state;
    return (
        <>
            {/* {JSON.stringify(state)} */}
            <ul className="list-unstyled">
                {list.map((listObj, index) => {
                    let { todo, status } = listObj;
                    return (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checked={status ? "checked" : ""}
                                id={`checkbox_${index}`}
                                onChange={() => markComplete(index)}
                            />
                            <label
                                className={status ? "ml-2 completed" : "ml-2"}
                                htmlFor={`checkbox_${index}`}
                            >
                                {todo}
                            </label>
                        </li>
                    );¯
                })}
            </ul>
            <input
                placeholder="Eg. Subscribe Online GuruCool"
                className="form-control"
                onChange={(event) => handelChange(event)}
                value={input}
            />
            <button
                className="btn btn-primary btn-block mt-2"
                onClick={(event) => addTodo(event)}
            >
                Add Todo
            </button>
        </>
    );
};

export default TodoList;
