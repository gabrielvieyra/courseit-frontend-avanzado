import { useState } from "react";

// Components
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";

const Team: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  function handleSearch(value: string): void {
    setInputValue(value);
  }

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <Products inputValue={inputValue} />
    </>
  );
};

export default Team;
