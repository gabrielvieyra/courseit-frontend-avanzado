// Components
import Navbar from './components/Navbar';
import StartupCardsContainer from './components/StartupCardsContainer';

// Provider
import { InputProvider } from './context/InputContext';

// Styles
import './App.scss';

function App() {
  return (
    <InputProvider>
      <Navbar />
      <StartupCardsContainer />
    </InputProvider>
  );
}

export default App;

// ejercicio
// agregar filtrado dinamico
