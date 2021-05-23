import React, { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
    const [tasks, setTasks] = useState([]);

    function handleInputValue(inputValue) {
        const newTasks = [...tasks, inputValue];

        setTasks(newTasks);
    }

    return (
        <>
            <AddTask handleCallback={handleInputValue} />
            <Tasks tasks={tasks} />
        </>
    );
}

export default App;
