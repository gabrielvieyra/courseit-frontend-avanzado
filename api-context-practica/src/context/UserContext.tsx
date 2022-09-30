import { useState, useEffect, createContext } from 'react';

// Interfaces
import { User, Project } from '../types/types';

// Definimos la informacion que el contexto va a proporcionarle a todos los componentes hijos
interface UserContextProps {
  info: User;
  repos: Array<Project>;
}

export const UserContext = createContext({} as UserContextProps);

interface UserProviderProps {
  children: React.ReactNode | JSX.Element;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  // 1er endpoint
  // titulo de name
  // avatar de avatar_url
  // bio de bio
  const [user, setUser] = useState<User>({
    name: '',
    avatar_url: '',
    bio: '',
  });
  // 2do endpoint / proyectos del enpoint repos_url
  // nombre del proyecto y la cantidad de estrellitas que tenga el repo
  const [projects, setProjects] = useState<Array<Project>>([]);

  useEffect(() => {
    getData('https://api.github.com/users/gabrielvieyra', setUser);
    getData('https://api.github.com/users/gabrielvieyra/repos', setProjects);
  }, []);

  async function getData(url: string, setter: () => void): Promise<void> {
    // ej de una forma de hacer manejo de errores
    // trata de ejecutar el codigo que esta dentro de try pero si se encuentra con cualquier tipo de error en alguna parte de la ejecucion, automaticamente deja de
    // ejecutar el try y salta al catch mandandote el error
    try {
      const getResponse = await fetch(url);
      const getJson = await getResponse.json();
      // console.log(getJson);
      setter(getJson);
    } catch (err) {
      console.log(err);
    }
  }

  const contextData = {
    info: user,
    repos: projects,
  };

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  );
};
