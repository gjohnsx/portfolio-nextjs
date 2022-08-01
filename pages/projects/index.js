import { getSortedProjectsData } from '../../lib/projects';
import ProjectsLayout from '../../components/Projects';
import Layout from "../../components/Layout";

const metaDescription = "See what I've been building and what I've shipped.";
const pageTitle = 'Projects';

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();
    return {
      props: {
        allProjectsData,
      },
    };
  };

  
export default function Projects({ allProjectsData }) {
    return (
        <>
            <Layout
                metaDescription={metaDescription}
                pageTitle={pageTitle}
            >
                
                <ProjectsLayout
                    allProjectsData={allProjectsData}
                />

            </Layout>
        </>
    );
}