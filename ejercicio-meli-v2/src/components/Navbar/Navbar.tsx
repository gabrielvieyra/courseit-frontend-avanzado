import React from "react";

interface NavbarProps {
  handleSearch: (data: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleSearch }) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    handleSearch(e.target.value);
  }

  return <input type="text" onChange={handleChange} />;
};

export default Navbar;
