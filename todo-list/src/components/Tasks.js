import React, { useState } from "react";
import Task from "./Task,";

function Tasks() {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleClick() {
        const newTasks = [...tasks, inputValue];

        if (inputValue !== "") {
            setTasks(newTasks);
            setInputValue("");
        }
    }

    return (
        <>
            <input
                type="text"
                onChange={handleChange}
                value={inputValue}
            ></input>
            <button onClick={handleClick}>Agregar</button>
            <ul>
                {tasks.map((name, key) => {
                    return <Task name={name} key={key} />;
                })}
            </ul>
        </>
    );
}

export default Tasks;
