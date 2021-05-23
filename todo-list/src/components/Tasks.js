import React from "react";
import Task from "./Task,";

function Tasks(props) {
    return (
        <ul>
            {props.tasks.map((name, key) => {
                return <Task name={name} key={key} />;
            })}
        </ul>
    );
}

export default Tasks;
