import Image from 'next/image';
import profilePic from '../public/images/5680pairbeanz-prod.png';
import socialButtons from './social-buttons';

export default function Hero() {
  return (
    <main className="bg-white py-2 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <div className="px-4 sm:px-6 text-center md:max-w-2xl md:mx-auto md:col-span-6 md:text-left md:flex md:items-center">
            <div>

              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                <span className="text-sky-700 md:block">Gregory Johns</span>
              </h1>

              <h2 className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Developer & Digital Marketer
              </h2>

              <div className="mt-2 lg:mt-8 flex space-x-6 justify-center md:justify-start">
                {socialButtons.map((item) => (
                  <a key={item.name} href={item.href} target={item.target} rel={item.rel} className="text-gray-700 hover:text-orange-400">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-10 w-10" aria-hidden="true" />
                  </a>
                ))}
              </div>


            </div>
          </div>

          <div className="my-2 md:my-0 md:col-span-6 w-1/2 mx-auto">
            <Image
              src={profilePic}
              alt='gjohnsx profile picture'
              className='rounded-full shadow-sm'
              height={300}
              width={300}
            />
          </div>

        </div>
      </div>
    </main>
  );
};