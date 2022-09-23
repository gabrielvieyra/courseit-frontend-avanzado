// Paso 1: creamos el context y lo exportamos
import { createContext, useState } from 'react';

// Aca vamos a crear y exportar nuestro contexto, a createContext lo guardamos en una variable y le tenemos que pasar un valor inicial
export const ThemeContext = createContext(null);

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface Theme {
  theme: string;
}

// Paso 2: vamos a crear y exportar nuestro componente funcional provider y tambien vamos a llenar el contexto
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // ejercicio
  // voy a cambiar de dark a light mode el boton y el contenido cada vez que haga click en el boton
  const [theme, setTheme] = useState<Theme>({
    theme: 'light',
  });
  return (
    // el contexto te permite crear un provider (ThemeContext.Provider), el objetivo del provider es proveer de informacion a sus elementos hijos
    // value es una prop que le vamos a pasar la informacion con la que quiero llenar mi context
    // value es un objeto que tiene la informacion de mis estados (las primeras llaves son para poder escribir codigo de ts y las segundas llaves
    // hacen referencia al objeto)
    <ThemeContext.Provider
      value={{
        developer: 'Gabriel',
        community: 'The Fullstack Devs',
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
