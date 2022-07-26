import Image from 'next/image';
import profilePic from '../public/images/5680pairbeanz-prod.png';
import socialButtons from './social-buttons';

export default function Hero() {
  return (
    <div className="hero py-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:mr-24 flex flex-col justify-center items-center lg:items-start'>
          <h1 className="text-5xl font-extrabold text-primary text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">Gregory Johns</h1>
          <h2 className="mt-3 max-w-md text-lg sm:text-xl md:mt-5 md:max-w-3xl">
            Developer and Digital Marketer
          </h2>

          <div className="mt-8 flex space-x-6 justify-center md:justify-start">
              {socialButtons.map((item) => (
                <a key={item.name} href={item.href} target={item.target} rel={item.rel} className="text-neutral hover:text-neutral-focus">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-10 w-10" aria-hidden="true" />
                </a>
              ))}
          </div>

        </div>
        <Image
          src={profilePic}
          alt='gjohnsx profile picture'
          className='rounded-full shadow-sm'
          height={300}
          width={300}
        />
      </div>
    </div>
  );
};