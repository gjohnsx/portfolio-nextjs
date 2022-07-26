import { getSortedPostsData } from '../lib/posts';
import Hero from '../components/Hero';
import Blogs from '../components/Blogs';
import Layout from '../components/Layout';

const metaDescription = 'Welcome to the portfolio site of Gregory Johns.';
const pageTitle = 'Home';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function HomePage({ allPostsData }) {
  return (
    <>      
      <Layout 
        metaDescription={metaDescription}
        pageTitle={pageTitle}
      >

        <Hero />

        <section className='bg-base-300'>
          <div className='container px-4 py-2 sm:py-12'>
              <Blogs posts={allPostsData} heading='Blogs' />
          </div>
        </section>
        
      </Layout>
    </>
  );
};