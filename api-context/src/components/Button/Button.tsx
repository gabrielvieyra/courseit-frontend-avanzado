import { useContext } from 'react';

// Context
import { ThemeContext } from '../../context/ThemeContext';

// Styles
import './_button.scss';

const Button: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme(): void {
    // console.log(theme, 'theme');
    // console.log(setTheme, 'setTheme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <button className={`button ${theme}`} onClick={() => handleTheme()}>
      Soy el componente Button
    </button>
  );
};

export default Button;
