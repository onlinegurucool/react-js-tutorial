import React, { useState } from "react";

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
    const markDone = (index) => {
        let newState = [...todoList];
        newState[index].status = true;
        setTodoList(newState);
    }
    return (
        <ul>
            {todoList.map((t, ti) => {
                return (
                    <li key={t.id} onClick={() => markDone(ti)}>
                        {" "}
                        {t.todo} {t.status && <i class="fa fa-check"></i>}{" "}
                    </li>
                );
            })}
        </ul>
    );
};

export default TodoList;
