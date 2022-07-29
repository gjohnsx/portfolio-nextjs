import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../public/images/5680pairbeanz-prod.png'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  ViewGridIcon,
  XIcon,
  HomeIcon,
  UserIcon,
  PencilIcon
} from '@heroicons/react/outline'

const solutions = [
  {
    name: 'Home',
    description: 'Portfolio home page.',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'About',
    description: 'Learn about my interests and what drives me.',
    href: '#',
    icon: UserIcon,
  },
  {
    name: 'Projects',
    description: "See what I've built and what I'm working on now.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Blog',
    description: 'Read my writing on marketing, decentralization, and more.',
    href: '#',
    icon: PencilIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProfileImage = () => (
    <Image
      src={profilePic}
      alt="gjohnsx profile picture"
      className='rounded-full shadow'
      width={50}
      height={50}
    />
);

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href='/'>
            <a>
              <span className="sr-only">gjohnsx</span>
              <ProfileImage />
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-800">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <Link href='/about'>
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </a>
          </Link>

          <Link href='/projects'>

            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Projects
            </a>
          </Link>

          <Link href='/posts'>
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Blogs
            </a>
          </Link>
        </Popover.Group>

        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Link href='/contact'>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-800 hover:bg-sky-900"
            >
              Contact
            </a>
          </Link>
        </div>

      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href='/'>
                    <a>
                      <span className="sr-only">gjohnsx</span>
                      <ProfileImage />
                    </a>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-800">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {solutions.map((solution) => (
                    <Link href={solution.href} key={solution.name}>
                      <a
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-sky-800 text-white">
                          <solution.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{solution.name}</div>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <div className="py-6 px-5">
              <div className="mx-auto w-max">
                <Link href='/contact'>
                  <a
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
};