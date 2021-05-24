import React from "react";

function Task(props) {
    function handleClick() {
        const { name, handleCallback } = props;

        if (handleCallback) {
            handleCallback(name);
        }
    }

    return (
        <li
            onClick={handleClick}
            style={props.isCompleted ? { color: "green" } : { color: "black" }}
        >
            {props.name}
        </li>
    );
}

export default Task;
