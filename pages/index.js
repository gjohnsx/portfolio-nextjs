import { getSortedPostsData } from '../lib/posts';
import { getSortedProjectsData } from '../lib/projects';
import Hero from '../components/Hero';
import Blogs from '../components/Blogs';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

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

        <div className="relative bg-gray-50 overflow-hidden py-2 md:py-12">
          <div className='container'>
            <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
              <div>
                <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl text-sky-700">
                  Projects
                </h2>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-700">
                  Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
                  malesuada. Eleifend condimentum id viverra nulla.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
              {allProjectsData.map(project => (
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6 border-b border-gray-100">
                    <h3 className='text-gray-900 text-xl font-semibold'>{project.title}</h3>
                  </div>

                  <div className="bg-white px-4 py-5 sm:p-6 flex items-center gap-4">

                    <div className='w-2/3'>
                      <Link href={project.imageLink}>
                        <a target='_blank' title='View tweet'>
                          <Image
                            src={project.image}
                            width={project.imageWidth}
                            height={project.imageHeight}
                            layout='responsive'
                          />
                        </a>
                      </Link>
                    </div>

                    <div className='flex flex-col'>
                      <p className='text-gray-700 mb-2'>{project.description}</p>
                      <div className='flex my-2'>
                        <Link href={project.productionLink}>
                          <a
                            target='_blank'
                            className="mr-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-800 hover:bg-sky-900"
                          >
                            View project
                          </a>
                        </Link>
                        <Link href={`/projects/${project.id}`}>
                          <a
                            className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-sky-800 border border-sky-800 bg-white hover:bg-gray-100"
                          >
                            Read more
                          </a>
                        </Link>
                      </div>

                      <Link href={project.githubLink}>
                        <a target='_blank' className='text-gray-700 hover:text-orange-400'>
                          <svg fill="currentColor" viewBox="0 0 24 24" className="h-10 w-10">
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                        </a>
                      </Link>

                    </div>


                  </div>
                </div>
                ))}
            </div>
          </div>
        </div>


        <section className='bg-gray-50'>
          <div className='container px-4 py-2 sm:py-12'>
              <Blogs posts={allPostsData} heading='Blogs' />
          </div>
        </section>
        
      </Layout>
    </>
  );
};