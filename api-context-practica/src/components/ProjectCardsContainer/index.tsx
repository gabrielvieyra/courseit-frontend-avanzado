// Components
import ProjectCard from '../ProjectCard';

// Interfaces
import { Project } from '../../types/types';

interface ProjectCardsContainerProps {
  projects: Array<Project>;
}

const ProjectCardsContainer: React.FC<ProjectCardsContainerProps> = ({
  projects,
}) => {
  //   console.log(projects, 'projects');
  return (
    <>
      <h1>Projects</h1>
      {projects.map((project, index) => {
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
