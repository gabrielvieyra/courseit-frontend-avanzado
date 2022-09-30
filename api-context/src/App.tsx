// Components
import Content from './components/Content/Content';
import Button from './components/Button/Button';

// Provider
import { ThemeProvider } from './context/ThemeContext';

// Styles
import './App.scss';

function App() {
  return (
    // si queremos crear un contexto que funcione para toda nuestra aplicacion, el componente provider va a tener que abrazar a absolutamente todo
    // todos los componentes que esten adentro de este provider van a tener la posibilidad de consumir la informacion que esta proveyendo el provider
    <ThemeProvider>
      <Button />
      <Content />
    </ThemeProvider>
  );
}

export default App;
