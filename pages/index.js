import { getSortedPostsData } from '../lib/posts';
import { getSortedProjectsData } from '../lib/projects';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import Layout from '../components/Layout';

const metaDescription = 'Welcome to the portfolio site of Gregory Johns.';
const pageTitle = 'Gregory Johns';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allPostsData,
      allProjectsData
    },
  };
};

export default function HomePage({ allPostsData, allProjectsData }) {
  return (
    <>      
      <Layout 
        metaDescription={metaDescription}
        pageTitle={pageTitle}
      >

        <Hero />

        <Projects allProjectsData={allProjectsData} />

        <section className='bg-gray-50'>
          <div className='container px-4 py-2 sm:py-12'>
              <Blogs posts={allPostsData} heading='Blogs' />
          </div>
        </section>

      </Layout>
    </>
  );
};