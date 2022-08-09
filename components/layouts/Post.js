import Date from "../Date";
import Image from "next/image";
import { CameraIcon } from '@heroicons/react/solid'

export default function Post({ postData }) {
    return (
      <div className="bg-white relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">

        <div className="max-w-prose mx-auto prose md:prose-lg dark:prose-invert prose-headings:text-gray-800 prose-p:text-gray-700 prose-li:text-gray-700">
            <div className="text-center">
                <Date dateString={postData.date} />
            </div>

            <h1 className='order-first'>
                <span className="block text-3xl text-center text-sky-800 leading-8 font-extrabold tracking-tight sm:text-4xl">
                    {postData.title}
                </span>
            </h1>

            {postData.image && (
                <figure>
                    <Image
                        src={postData.image.src}
                        width={postData.image.width}
                        height={postData.image.height}
                    />
                    <figcaption className="mt-3 flex text-sm text-gray-500">
                        <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                        <span className="ml-2">{postData.image.figcaption}</span>
                    </figcaption>
                </figure>
            )}

            <div
                className=""
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
            />
            
        </div>

    </div>
    );  
};  