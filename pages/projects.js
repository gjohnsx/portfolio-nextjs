import { getSortedProjectsData } from '../lib/projects';
import Blogs from "../components/Blogs";
import Layout from "../components/Layout";

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

  
export default function Posts({ allProjectsData }) {
    return (
        <>
            <Layout
                metaDescription={metaDescription}
                pageTitle={pageTitle}
            >

                <Blogs
                    posts={allProjectsData}
                    heading='Projects'
                    showEmail={false}
                />

            </Layout>
        </>
    );
}