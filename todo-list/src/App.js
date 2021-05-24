import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
    const [tasks, setTasks] = useState([]);
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const getData = await fetch(
                "https://api.github.com/users/gabrielvieyra"
            );
            const getJson = await getData.json();

            console.log(getJson);
            setData(getJson);
        }

        fetchData();
    }, []);

    function handleInputValue(inputValue) {
        const newTasks = [...tasks, { value: inputValue, isCompleted: false }];

        setTasks(newTasks);
    }

    function handleCallback(name) {
        const modifiedTasks = tasks.map((task) => {
            if (task.value === name) {
                return {
                    value: task.value,
                    isCompleted: !task.isCompleted
                };
            }

            return task;
        });

        setTasks(modifiedTasks);
    }

    return (
        <>
            <AddTask handleCallback={handleInputValue} />
            <Tasks handleCallback={handleCallback} tasks={tasks} />
            Tareas resueltas:
            <ul>
                <li>aca van</li>
            </ul>
            <p>Login: {data.login}</p>
        </>
    );
}

export default App;
