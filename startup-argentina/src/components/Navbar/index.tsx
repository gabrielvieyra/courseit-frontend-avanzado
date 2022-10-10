// Dependencies
import { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import Search from '../Search';

// Styles
import './styles.scss';

const Navbar: FC = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <h2>Startup Argentina</h2>
      </Link>
      <Search />
      <Link to='/add'>Agregar startup</Link>
    </nav>
  );
};

export default Navbar;
