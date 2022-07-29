import Layout from "../components/Layout";
import {
    LockClosedIcon,
    CubeTransparentIcon,
    DesktopComputerIcon,
    ChipIcon,
    CursorClickIcon
    } from '@heroicons/react/outline'
import techStackIcons from '../components/tech-stack-icons';

const features = [
    {
        name: 'Blockchain',
        description: 'Blockchains are not an all-purpose replacement for all databases, but they might be a replacement for the important things',
        icon: LockClosedIcon,
    },
    {
        name: 'Decentralization',
        description: 'I want to work on the transition from argument from authority, where corporations and centralized institutions say what is true, to argument from cryptography.',
        icon: CubeTransparentIcon,
    },
    {
        name: 'NFTs',
        description: 'NFTs are a trojan horse for introducing decentralized rails into society. In an increasingly digital society, should 10 big corporations and the government be in charge of everything?',
        icon: ChipIcon,
    },
    {
        name: 'Programming',
        description: 'Understand the problem, devise a plan, execute the plan, review and extend.',
        icon: DesktopComputerIcon,
    },
    {
        name: 'UI / UX',
        description: 'NFTs are fun, but web3 is still terrifying trying not to lose everything with 1 wrong click. Web3 won\'t win until dapps are societally acceptable AND just as easy to use.',
        icon: CursorClickIcon,
    },
];

export default function About() {
    return (
        <Layout
            metaDescription='About me.'
            pageTitle='About'
        >
            <div className='container my-4 lg:my-12 '>
                <div className="text-center">
                    <h1 
                        className="mb-4 text-5xl font-extrabold text-sky-800 text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
                    >
                        About me
                    </h1>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">I'm changing careers from digital marketing to web3 development. I have a passion for decentralization and creating opportunities for people from all over the globe.</p>
                </div>

                <div className="">
                    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-sky-800 tracking-tight">Interests</h2>
                        <p className="mt-4 max-w-3xl text-lg text-gray-500">
                            I started with Python programs to gather blockchain data.
                            <br />
                            Now I'm building fullstack web3 apps.
                        </p>

                        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                            {features.map((feature) => (
                            <div key={feature.name}>
                                <div>
                                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-700">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-lg font-medium text-gray-800">{feature.name}</h3>
                                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 overflow-hidden rounded-lg text-center py-4">
                    <h2 className="text-3xl font-extrabold text-sky-800 tracking-tight">Tech Stack</h2>
                    
                    <div className="flex justify-center">
                        {techStackIcons.map((tech) => (
                        <div key={tech.name} className='mr-2'>
                            <div className="mt-6">
                                <span className="text-sky-800" title={tech.name}>{tech.icon}</span>
                                <h3 className="sr-only">{tech.name}</h3>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

        </Layout>
    );
};