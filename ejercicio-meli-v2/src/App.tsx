import React, { useState } from "react";

// Components
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [inputValue, setInputValue] = useState<string>("");

  function handleSearch(data: string): void {
    setInputValue(data);
  }

  // console.log(inputValue);
  return (
    <>
      <h1>Ejercicio Mercadolibre</h1>
      <Navbar handleSearch={handleSearch} />
      <List inputValue={inputValue} />
    </>
  );
}

export default App;
