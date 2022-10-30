import { FC, useState, useEffect } from 'react';

// Components
import Navbar from '../../components/Navbar';
import StartupCardsContainer from '../../components/StartupCardsContainer';

// Interfaces
import { Startup } from '../../types/types';

// Custom hooks
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Home: FC = () => {
  // Ejercicio: quiero tener un input y 3 botones, uno que diga guardar informacion, otro que diga leer informacion y el ultimo que diga
  // borrar informacion

  const [inputValue, setInputValue] = useState<string>('');
  const [localStorageValue, setLocalStorageValue] = useState<string>('');

  const [parseStartups] = useLocalStorage();

  function saveInformationToLocalStorage(): void {
    localStorage.setItem('inputValue', inputValue);
  }

  function getInformationFromLocalStorage(): void {
    const value = localStorage.getItem('inputValue');
    setLocalStorageValue(value);
  }

  function deleteInformationFromLocalStorage(): void {
    localStorage.clear();
  }

  return (
    <>
      <Navbar />
      <StartupCardsContainer />
      <div style={{ display: 'flex', gap: '12px' }}>
        <input type='text' onChange={e => setInputValue(e.target.value)} />
        <button onClick={saveInformationToLocalStorage}>Guardar informacion</button>
        <button onClick={getInformationFromLocalStorage}>Leer informacion</button>
        <button onClick={deleteInformationFromLocalStorage}>Borrar informacion</button>
        <p>El valor de localStorage es: {localStorageValue}</p>
      </div>
      <div>
        {parseStartups.map((startup, index) => {
          return <div key={index}>{startup.name}</div>;
        })}
      </div>
    </>
  );
};

export default Home;
