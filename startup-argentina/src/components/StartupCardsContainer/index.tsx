// Dependencies
import { FC } from 'react';

// Components
import StartupCard from '../StartupCard';

// Data
import ElNombreQueQuieras from '../../data/data.json';

// Styles
import './styles.scss';

const StartupCardsContainer: FC = () => {
  // console.log(data);
  return (
    <div className='startup-cards-container'>
      {ElNombreQueQuieras.map((startup, index) => {
        const { name, description, id, imagen } = startup;
        return (
          <StartupCard key={id ? id : index} name={name} description={description} src={imagen} />
        );
      })}
    </div>
  );
};

export default StartupCardsContainer;
