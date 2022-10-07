// Dependencies
import { FC } from 'react';

// Components
import Search from '../Search';

// Styles
import './styles.scss';

const Navbar: FC = () => {
  return (
    <nav className='navbar'>
      <h2>Startup Argentina</h2>
      <Search />
      <a href=''>Agregar startup</a>
    </nav>
  );
};

export default Navbar;
