// Styles
import "./_navbar.scss";

interface NavbarProps {
  handleSearch: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleSearch }) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    handleSearch(e.target.value);
  }

  return (
    <nav className="navbar">
      <input type="text" onChange={handleChange} />
    </nav>
  );
};

export default Navbar;
