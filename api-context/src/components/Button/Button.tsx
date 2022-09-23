import { useContext } from 'react';

// Context
import { ThemeContext } from '../../context/ThemeContext';

// Styles
import './_button.scss';

interface ButtonProps {
  handleTheme: () => void;
}

const Button: React.FC<ButtonProps> = ({ handleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <button className={`button ${theme}`} onClick={() => handleTheme()}>
      Soy el componente Button
    </button>
  );
};

export default Button;
