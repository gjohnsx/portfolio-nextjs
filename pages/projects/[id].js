import { getAllProjectIds, getProjectData, getSortedProjectsData } from '../../lib/projects';
import Layout from '../../components/Layout';
import Projects from '../../components/Projects';
import ProjectLayout from '../../components/layouts/Project';

export async function getStaticPaths() {
    const paths = getAllProjectIds();
    return {
      paths,
      fallback: false,
    };
};

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id);
    const allProjectsData = getSortedProjectsData();

    return {
      props: {
        projectData,
        allProjectsData
      },
    };
};
  
export default function Project({ projectData, allProjectsData }) {
    const filteredProjects = allProjectsData.filter(project => project.id !== projectData.id);

    return (
        <Layout
            metaDescription={projectData.description}
            pageTitle={projectData.title}
        >
            <ProjectLayout postData={projectData} />

            <div className='bg-gray-100'>
                <Projects allProjectsData={filteredProjects} />
            </div>
        </Layout>
    );
};