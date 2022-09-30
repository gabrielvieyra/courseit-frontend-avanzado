// En este archivo vamos a manejar el contexto y el provider y el hook useContext lo vamos a utilizar para lo que es el consumer
// Paso 1: creamos el context y lo exportamos
import { createContext, useState } from 'react';

// Definimos la informacion que el contexto va a proporcionarle a todos los componentes hijos
interface ThemeContextProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

// Aca vamos a crear y exportar nuestro contexto, a createContext lo guardamos en una variable y le tenemos que pasar un valor inicial
// Le pasamos un valor inicial por si alguien llega a llamar a este contexto antes de proveerle datos, en este caso va a leer un objeto vacio
export const ThemeContext = createContext({} as ThemeContextProps);

interface ThemeProviderProps {
  children: React.ReactNode;
}

// Paso 2: vamos a crear y exportar nuestro componente funcional provider y tambien vamos a llenar el contexto
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // ejercicio
  // voy a cambiar de dark a light mode el boton y el contenido cada vez que haga click en el boton
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    // el contexto te permite crear un provider (ThemeContext.Provider), el objetivo del provider es proveer de informacion a sus elementos hijos
    // value es una prop que le vamos a pasar la informacion con la que quiero llenar mi context (las llaves son para poder escribir codigo de ts y en el caso
    // que le quiera pasar un objeto abrimos unas segundas llaves como pasa en este ejemplo)
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
