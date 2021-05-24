import React from "react";
import Task from "./Task,";

function Tasks(props) {
    function handleCallback(name) {
        console.log("Padre", name);
        props.handleCallback(name);
    }

    return (
        <ul>
            {props.tasks.map((task, key) => {
                return (
                    <Task
                        handleCallback={handleCallback}
                        name={task.value}
                        isCompleted={task.isCompleted}
                        key={key}
                    />
                );
            })}
        </ul>
    );
}

export default Tasks;
