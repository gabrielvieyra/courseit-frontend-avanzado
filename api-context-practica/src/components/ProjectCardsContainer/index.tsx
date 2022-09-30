import { useContext } from 'react';

// Context
import { UserContext } from '../../context/UserContext';

// Components
import ProjectCard from '../ProjectCard';

const ProjectCardsContainer: React.FC = () => {
  const { repos } = useContext(UserContext);
  // console.log(repos);
  return (
    <>
      <h1>Projects</h1>
      {repos.map((project, index) => {
        const { name, id, stargazers_count } = project;
        return (
          <ProjectCard
            key={id ? id : index}
            name={name}
            stars={stargazers_count}
          />
        );
      })}
    </>
  );
};

export default ProjectCardsContainer;
