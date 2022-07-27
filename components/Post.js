import Date from "./Date";

export default function Post({ postData }) {
    return (
      <div className="bg-white relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">

        <div className="max-w-prose mx-auto prose md:prose-lg dark:prose-invert prose-headings:text-gray-800 prose-p:text-gray-700 prose-li:text-gray-700">
            <Date dateString={postData.date} />

            <h1 className='order-first'>
                <span className="block text-3xl text-center text-sky-800 leading-8 font-extrabold tracking-tight sm:text-4xl">
                    {postData.title}
                </span>
            </h1>

            <div
                className=""
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
            />
            
        </div>

    </div>
    );  
};  