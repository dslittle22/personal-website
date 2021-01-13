import Head from 'next/head';
import ProjectsGrid from '../components/ProjectsGrid';

const Projects = () => {
  return (
    <>
      <Head>
        <title>{'Danny Little - Projects'}</title>
      </Head>
      <h2>Projects</h2>
      <ProjectsGrid />
    </>
  );
};

export default Projects;
