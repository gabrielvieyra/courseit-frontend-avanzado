import React, { useState } from "react";

function AddTask(props) {
    const [inputValue, setInputValue] = useState("");

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleKeyDown(e) {
        if (e.keyCode === 13) {
            addTask();
        }
    }

    function addTask() {
        if (inputValue && props.handleCallback) {
            props.handleCallback(inputValue);
            setInputValue("");
        }
    }

    return (
        <>
            <input
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={inputValue}
            ></input>
            <button onClick={addTask}>Agregar</button>
        </>
    );
}

export default AddTask;
