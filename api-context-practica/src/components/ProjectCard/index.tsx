// Styles
import './styles.scss';

interface ProjectCardProps {
  name: string;
  stars: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, stars }) => {
  return (
    <div className='project-card'>
      <h3>
        {name} - {stars}
      </h3>
    </div>
  );
};

export default ProjectCard;
