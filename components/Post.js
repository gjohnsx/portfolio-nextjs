import Date from "./Date";

export default function Post({ postData }) {
    return (
      <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">

        <div className="text-lg max-w-prose mx-auto prose prose-slate">
            <Date dateString={postData.date} />

            <h1 className='order-first'>
                <span className="block text-3xl text-center text-primary leading-8 font-extrabold tracking-tight sm:text-4xl">
                {postData.title}
                </span>
            </h1>

            <div
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
            />
            
        </div>

    </div>
    );  
};  