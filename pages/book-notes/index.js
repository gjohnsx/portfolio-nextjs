import { getSortedPostsData } from '../../lib/posts';
import Blogs from "../../components/Blogs";
import Layout from "../../components/Layout";

const metaDescription = 'Book notes.';
const pageTitle = 'Book Notes';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  };

  
export default function Posts({ allPostsData }) {
    return (
        <>
            <Layout
                metaDescription={metaDescription}
                pageTitle={pageTitle}
            >

                <Blogs
                    posts={allPostsData}
                    heading='Book Notes'
                    showEmail={false}
                />

            </Layout>
        </>
    );
};