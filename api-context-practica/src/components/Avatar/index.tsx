import { useContext } from 'react';

// Context
import { UserContext } from '../../context/UserContext';

const avatar: React.FC = () => {
  const { info } = useContext(UserContext);
  // console.log(user);

  return <img src={info.avatar_url} alt='avatar' />;
};

export default avatar;
