import { useState } from "react";
// importamos el hook de react-router-dom
import { useNavigate } from "react-router-dom";

// Styles
import React from "react";
import "./_navbar.scss";

interface NavbarProps {
  handleSearch: (value: string) => void;
  site: string;
}

const Navbar: React.FC<NavbarProps> = ({ handleSearch, site }) => {
  // dentro de mi componente lo usamos de esta manera
  const navigate = useNavigate();
  // console.log(navigate);

  const [inputValue, setInputValue] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    // le tengo que pasar como argumento a donde quiero ir
    navigate(`/search02/${site}?inputValue=${inputValue}`);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(e.target.value);
    // handleSearch(e.target.value);
  }

  return (
    // TODO: agregar menu mobile
    // podriamos reutilizar el componente ej si estoy en mobile lo muestro de una manera y si estoy en desktop o tablet lo muestro de otra manera
    <nav className="navbar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          onChange={handleChange}
          value={inputValue}
        />
        <button type="submit" aria-label="search button">
          Buscar
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
