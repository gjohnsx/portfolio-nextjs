import { getSortedPostsData } from '../../lib/posts';
import Blogs from "../../components/Blogs";
import Layout from "../../components/Layout";

const metaDescription = 'Read my writing about web3, decentralization, and digital marketing.';
const pageTitle = 'Blogs';

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
                    heading='Blogs'
                    showEmail={false}
                />

            </Layout>
        </>
    );
};