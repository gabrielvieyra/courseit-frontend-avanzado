// importamos useContext desde react
import { useContext } from 'react';

// Context
import { ThemeContext } from '../../context/ThemeContext';

// Styles
import './_content.scss';

const Content: React.FC = () => {
  // Paso 3: consumir el context usando el hook useContext
  // a useContext le pasamos el contexto que creamos para poder leer, consumir la informacion de ese contexto
  // vamos a poder definir multiples variables accediendo a multiples contextos
  const theme = useContext(ThemeContext);
  // console.log(theme);

  return <div className={`${theme.theme.theme} content`}></div>;
};

export default Content;
