// Dependencies
import { FC } from 'react';

// Styles
import './styles.scss';

interface StartupCardProps {
  name: string;
  description: string;
  src: string;
}

const StartupCard: FC<StartupCardProps> = ({ name, description, src }) => {
  return (
    <div className='startup-card'>
      <img src={src} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default StartupCard;
