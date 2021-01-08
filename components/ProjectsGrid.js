import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { projectsList } from '../content';

const ProjectsGrid = () => {
  const renderProjects = () => {
    return projectsList.map(project => (
      <StyledProject key={project.title}>
        <Link href={project.href}>
          <a target='_blank'>
            <div className='grid-item'>
              <div>
                <h3>{project.title}</h3>
                <p>
                  Technologies used:
                  <ul>
                    {project.technologies.map(tech => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </p>
              </div>
              <Image
                src={project.imageURL}
                alt={`Image of ${project.title}`}
                width={140}
                height={180}
                objectFit='cover'
              />
            </div>
          </a>
        </Link>
      </StyledProject>
    ));
  };

  return <StyledProjectsGrid>{renderProjects()}</StyledProjectsGrid>;
};

export default ProjectsGrid;

const StyledProjectsGrid = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const StyledProject = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  transition: transform 250ms;
  :hover {
    transform: scale(1.02);
  }

  a {
    background: none;
  }
  .grid-item {
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    padding: 10px;
  }
`;
