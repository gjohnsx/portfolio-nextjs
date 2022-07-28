import { FaReact, FaPython } from "react-icons/fa";
import Image from 'next/image';

const icons = [
    {
        name: 'Python',
        icon: <FaPython className='w-10 h-10' />
    },
    {
        name: 'React',
        icon: <FaReact className='w-10 h-10' />
    },
    {
        name: 'TailwindCSS',
        icon: <Image src='/images/icons/tailwind-css-icon.svg' width={40} height={40} />
    },
    {
        name: 'Nextjs',
        icon: <Image src='/images/icons/nextjs-icon.svg' width={40} height={40} />
    },
    {
        name: 'Metamask',
        icon: <Image src='/images/icons/metamask-icon.svg' width={40} height={40} />
    }
]

export default icons;