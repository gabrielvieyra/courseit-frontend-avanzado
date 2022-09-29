// Styles
import './styles.scss';

interface NavbarProps {
  name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
  return (
    <nav className='navbar'>
      <h1 className='navbar__title'>{name}</h1>
    </nav>
  );
};

export default Navbar;
