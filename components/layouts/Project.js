import { CameraIcon } from '@heroicons/react/solid'
import Date from "../Date";
import Image from "next/image";
import Link from "next/link";

export default function Project({ postData }) {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-2 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className={`${postData.image.src ? 'lg:grid lg:grid-cols-2 lg:gap-8' : 'md:mx-44'} mx-auto text-base max-w-prose lg:max-w-none`}>
          
          <div>
            <div className='bg-white p-6 flex flex-col rounded-lg shadow-lg overflow-hidden'>
              <p className="text-base text-sky-600 font-semibold tracking-wide uppercase">Project</p>

              <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {postData.title}
              </h1>
              <Date dateString={postData.date} />

              <div className={`${postData.image.src ? 'mx-auto' : ''} text-base max-w-prose lg:max-w-none text-gray-700`}>
                {postData.description}
              </div>

              <div className={`${postData.id === 'portfolio' ? 'hidden' : 'block'}`}>
                  <Link href={postData.productionLink}>
                      <a
                          className="mt-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-800 hover:bg-sky-900"
                          target='_blank'
                      >
                          View Project
                      </a>
                  </Link>
              </div>
            </div>

            <div
                className="mt-4 prose md:prose-lg dark:prose-invert prose-headings:text-gray-800 prose-p:text-gray-700 prose-li:text-gray-700 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
            />

            <div className='my-4'>
              <Link href={postData.githubLink}>
                  <a target='_blank' className='inline-flex items-center px-4 py-2 border border-sky-700 text-sky-700 shadow-sm text-base font-medium rounded-md text-white bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-700'>
                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-10 w-10">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                          />
                    </svg>
                    View Github
                  </a>
              </Link>
            </div>
          </div>

          {postData.image.src && (
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto w-max max-w-prose lg:max-w-none">
                <figure>
                  <div className="">
                      <Image
                          src={postData.image.src}
                          height={postData.image.height}
                          width={postData.image.width}
                          alt={postData.image.alt}
                          className="rounded-lg shadow-lg object-cover object-center"
                      />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2">{postData.image.figcaption}</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};