// Dependencies
import { FC } from 'react';

interface ButtonProps {
  handleCallback: () => void;
}

const Button: FC<ButtonProps> = ({ handleCallback }) => {
  return (
    <button type='submit' onClick={handleCallback}>
      Agregar startup
    </button>
  );
};

export default Button;
