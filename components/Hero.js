import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../public/images/5680pairbeanz-prod.png';
import socialButtons from './social-buttons';

const aboutMeLinks = [
  { title: 'How good are you at programming anyway?', href: '/posts/how-good-are-you-at-programming-anyway/' },
  { title: 'Why are you changing careers?', href: '/posts/why-are-you-changing-careers/' },
  { title: 'My coding journey', href: '/posts/my-coding-journey/' },
];

export default function Hero() {
  return (
    <section className="hero relative">
      <Image
          src='/images/Gregory_anything_1e52c0e3-6620-4815-b57f-2a18987bb76f.png'
          layout='fill'
          objectFit='cover'
          // className='-z-10'
        />
      <div className="mx-auto max-w-7xl z-10 py-24">
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <div className="px-4 sm:px-6 text-center md:max-w-2xl md:mx-auto md:col-span-6 md:text-left md:flex md:items-center">
            <div className='py-4 px-10 bg-gray-700/60 rounded-lg shadow-lg'>

              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                <span className="text-white md:block">Gregory Johns</span>
              </h1>

              <h2 className="mt-5 max-w-prose mx-auto text-xl text-white">
                Developer & Digital Marketer
              </h2>

              <div className="mt-2 lg:mt-8 flex flex-col space-y-6 justify-center md:justify-start">
                {aboutMeLinks.map((item) => (
                  <Link key={item.title} href={item.href}>
                    <a className="text-white underline hover:text-orange-400">
                      <span>{item.title}</span>
                    </a>
                  </Link>
                ))}
              </div>

              <div className="mt-2 lg:mt-8 flex space-x-6 justify-center md:justify-start">
                {socialButtons.map((item) => (
                  <a key={item.name} href={item.href} target={item.target} rel={item.rel} className="text-white hover:text-orange-400">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-10 w-10" aria-hidden="true" />
                  </a>
                ))}
              </div>


            </div>
          </div>

          {/* <div className="my-2 md:my-0 md:col-span-6 w-1/2 mx-auto">
            <Image
              src={profilePic}
              alt='gjohnsx profile picture'
              className='rounded-full shadow-sm'
              height={300}
              width={300}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};