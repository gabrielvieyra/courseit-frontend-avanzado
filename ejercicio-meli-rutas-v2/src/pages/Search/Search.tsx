import { useState } from "react";
import { useParams } from "react-router-dom";

// Components
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";

const Search: React.FC = () => {
  const { id } = useParams();
  // console.log(id);

  const [inputValue, setInputValue] = useState<string>("");

  function handleSearch(value: string): void {
    setInputValue(value);
  }

  // console.log(id, "sitie");
  return (
    <>
      <Navbar handleSearch={handleSearch} site={id} />
      <Products inputValue={inputValue} site={id!} />
    </>
  );
};

export default Search;
