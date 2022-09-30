import { useContext } from 'react';

// Context
import { UserContext } from '../../context/UserContext';

const Paragraph: React.FC = () => {
  const { info } = useContext(UserContext);

  return <p>{info.bio}</p>;
};

export default Paragraph;
