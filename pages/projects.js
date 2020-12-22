import Link from 'next/link';
import Layout from '../components/layout';
import styled from 'styled-components';
import Image from 'next/image';
import { projectsList } from '../content';

const Projects = () => {
  const renderProjects = () => {
    return projectsList.map(project => (
      <Link href={project.href} key={project.title}>
        <a target='_blank'>
          <div className='grid-item'>
            <h3>{project.title}</h3>
            <Image
              src={project.imageURL}
              alt={`Image of ${project.title}`}
              width={280}
              height={360}
              objectFit='cover'
            />
          </div>
        </a>
      </Link>
    ));
  };
  return (
    <Layout page='Projects'>
      <h2>Projects</h2>
      <StyledProjectsGrid>{renderProjects()}</StyledProjectsGrid>
    </Layout>
  );
};

export default Projects;

const StyledProjectsGrid = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 10px;
  justify-content: center;
  align-items: center;

  .grid-item {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: 0.25fr 1fr;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    transform: scale(0.95);
    transition: transform 250ms;
    padding: 10px;

    :hover {
      transform: scale(1);
    }
  }
  a {
    background: none;
  }
`;
