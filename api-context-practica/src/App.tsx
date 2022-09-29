import { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Avatar from './components/Avatar';
import Paragraph from './components/Paragraph';
import ProjectCardsContainer from './components/ProjectCardsContainer';

// Styles
import './App.scss';

// Interfaces
import { User, Project } from './types/types';

function App() {
  // 1er endpoint
  // titulo de name
  // avatar de avatar_url
  // bio de bio

  // 2do endpoint / proyectos del enpoint repos_url
  // nombre del proyecto y la cantidad de estrellitas que tenga el repo
  const [user, setUser] = useState<User>({
    name: '',
    avatar_url: '',
    bio: '',
  });
  const [projects, setProjects] = useState<Array<Project>>([]);

  useEffect(() => {
    getData();
    getProjects();
  }, []);

  async function getData(): Promise<void> {
    const getResponse = await fetch(
      'https://api.github.com/users/gabrielvieyra'
    );
    const getJson = await getResponse.json();
    // console.log(getJson);
    setUser(getJson);
  }

  async function getProjects(): Promise<void> {
    const getResponse = await fetch(
      'https://api.github.com/users/gabrielvieyra/repos'
    );
    const getJson = await getResponse.json();
    // console.log(getJson);
    setProjects(getJson);
  }

  return (
    <>
      <Navbar name={user.name} />
      <div
        style={{
          backgroundColor: 'tomato',
          width: '100%',
          height: '20rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar src={user.avatar_url} />
        <Paragraph bio={user.bio} />
      </div>
      <ProjectCardsContainer projects={projects} />
    </>
  );
}

export default App;
