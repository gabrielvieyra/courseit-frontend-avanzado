// Dependencies
import { FC } from 'react';

// Components
import Navbar from '../../components/Navbar';
import StartupCardsContainer from '../../components/StartupCardsContainer';

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <StartupCardsContainer />
    </>
  );
};

export default Home;
