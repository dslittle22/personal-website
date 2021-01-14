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
              <div className='image-container'>
                <Image
                  src={project.imageURL}
                  alt={`Image of ${project.title}`}
                  height={project.imageHeight}
                  width={project.imageWidth}
                  layout='responsive'
                  // objectFit='responsive'
                />
              </div>
            </div>
          </a>
        </Link>
      </StyledProject>
    ));
  };

  return (
    <StyledProjectsGrid className='sidebar-span'>
      {renderProjects()}
    </StyledProjectsGrid>
  );
};

export default ProjectsGrid;

const StyledProjectsGrid = styled.div`
  padding-top: 1rem;
  display: grid;
  width: 100%;
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
  height: 100%;
  :hover {
    transform: scale(1.02);
  }

  a {
    background: none;
  }
  .grid-item {
    padding: 10px;
    display: grid;
    gap: 10px;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr;
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      align-items: center;
      .image-container {
        width: 80%;
        margin: 0 auto;
        div {
          max-height: 100%;
        }
        img {
          object-fit: cover;
        }
      }
    }
  }
`;
