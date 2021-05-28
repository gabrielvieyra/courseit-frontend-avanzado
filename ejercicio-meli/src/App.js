import React, { useState } from "react";
import Navbar from "./components/Navbar";
import List from "./components/List";

function App() {
    const [inputValue, setInputValue] = useState("");

    function handleCallback(inputValue) {
        setInputValue(inputValue);
    }

    return (
        <>
            <Navbar handleCallback={handleCallback} />
            <List inputValue={inputValue} />
        </>
    );
}

export default App;
