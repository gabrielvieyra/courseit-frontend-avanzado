import { useContext } from 'react';

// Context
import { UserContext } from '../../context/UserContext';

// Styles
import './styles.scss';

const Navbar: React.FC = () => {
  const { info } = useContext(UserContext);
  // console.log(user);

  return (
    <nav className='navbar'>
      <h1 className='navbar__title'>{info.name}</h1>
    </nav>
  );
};

export default Navbar;
