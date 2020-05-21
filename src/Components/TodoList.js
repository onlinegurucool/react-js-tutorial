import React, { useState, useEffect } from "react";

const TodoList = () => {
    let [todoList, setTodoList] = useState([
        {
            id: 1,
            todo: "Make Coffee",
            status: false,
        },
        {
            id: 2,
            todo: "Bake Cake",
            status: false,
        },
        {
            id: 3,
            todo: "Go To Gym",
            status: true,
        },
        {
            id: 4,
            todo: "Read Books",
            status: false,
        },
        {
            id: 5,
            todo: "Create Video",
            status: false,
        },
    ]);
    let [input, setInput] = useState("first");

    useEffect(() => {
        console.log(todoList);
        return () => {
            console.log("component hide")
        }
    }, [todoList]);

    useEffect(() => {
        console.log(input)
    },[input])

    const markDone = (index) => {
        let newState = [...todoList];
        newState[index].status = true;
        setTodoList(newState);
    };
    return (
        <>
            <ul>
                {todoList.map((t, ti) => {
                    return (
                        <li key={t.id} onClick={() => markDone(ti)}>
                            {" "}
                            {t.todo}{" "}
                            {t.status && <i className="fa fa-check"></i>}{" "}
                        </li>
                    );
                })}
            </ul>
            <input onChange={(e) => setInput(e.target.value)} value={input} />
        </>
    );
};

export default TodoList;
