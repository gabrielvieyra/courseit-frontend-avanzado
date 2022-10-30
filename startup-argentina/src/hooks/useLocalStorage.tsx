// Interfaces
import { Startup } from '../types/types';

export const useLocalStorage = (): [Array<Startup>, (startupInfo: Startup) => void] => {
  // SETTER
  function handleSave(startupInfo: Startup): void {
    // Leemos el localStorage y validamos si existe mi clave o no
    const startups = localStorage.getItem('startups') ? localStorage.getItem('startups') : [];
    // Chequeamos si el typeof de mi variable startups es de tipo string, si es un string lo parseo si no lo dejo como esta
    // Parseamos lo que leemos a un array de objetos
    const parsedStartups = typeof startups === 'string' ? JSON.parse(startups) : startups;
    // Hacemos un push
    parsedStartups.push(startupInfo);
    // Pasamos ese array de objetos a un string
    const stringifyStartups = JSON.stringify(parsedStartups);
    // Guardamos en el localStorage la informacion
    localStorage.setItem('startups', stringifyStartups);
  }

  // GETTER
  const getStartups = localStorage.getItem('startups') ?? '[]';
  const parseStartups = JSON.parse(getStartups!);

  return [parseStartups, handleSave];
};

// 1. Validar que el formulario no tenga errores
// 2. Leer el localStorage
// 3. Parsear lo que leyeron a un array de objetos
// 4. Hacer un push
// 5. Hacer un stringify de su nuevo array
// 6. Guardar esa informacion
