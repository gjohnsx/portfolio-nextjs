import { getAllProjectIds, getProjectData, getSortedProjectsData } from '../../lib/projects';
import Layout from '../../components/Layout';
import Blogs from '../../components/Blogs';
import PostLayout from '../../components/Post';

export async function getStaticPaths() {
    const paths = getAllProjectIds();
    return {
      paths,
      fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id);
    const allProjectsData = getSortedProjectsData();

    return {
      props: {
        projectData,
        allProjectsData
      },
    };
}
  
export default function Project({ projectData, allProjectsData }) {
    const filteredProjects = allProjectsData.filter(project => project.id !== projectData.id);

    return (
        <Layout
            metaDescription={projectData.description}
            pageTitle={projectData.title}
        >
            <PostLayout postData={projectData} />

            <div className='bg-gray-100'>
                <Blogs posts={filteredProjects} heading='More Projects' showEmail={false}/>
            </div>
        </Layout>
    );
}