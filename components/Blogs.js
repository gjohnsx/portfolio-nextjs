import Link from "next/link";

const Blog = ({ post }) => {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <p className="text-sm text-gray-400">
                    <time dateTime={post.datetime}>{post.date}</time>
                </p>

                <Link href={`/posts/${post.id}`}>
                    <a className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-800 hover:underline">{post.title}</p>
                    </a>
                </Link>

                <div className="flex">
                    {post.tags.map(tag => (
                        <div key={tag} className="text-sm text-sky-800 mt-1 mr-1">
                            <Link href={`/posts/${tag.toLowerCase().replace('.', '-')}`}>
                                <a>
                                    <span
                                        className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-sky-100'
                                    >
                                        {tag}
                                    </span>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-3">
                    <Link href={`/posts/${post.id}`}>
                        <a className="text-base font-semibold text-orange-600 hover:text-orange-700">
                        Read full story
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default function Blogs({ posts, heading, filter = null, showEmail = true }) {
    if (filter) {
        posts = posts.filter(post => post.tags.includes(filter));
    }

    return (
        <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">

            <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl text-sky-700">
                        {heading}
                    </h2>
                    <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center text-gray-700">
                        <p className="text-xl">Read my writing about web3, decentralization, and digital marketing.</p>

                        {showEmail && (
                            <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email-address"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                
                                <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                                    <button
                                        type="button"
                                        className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-800 hover:bg-sky-900"
                                    >
                                        Notify me
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                <div className="mt-6 pt-10 grid gap-2 lg:gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                    {posts.map((post) => (
                        <Blog post={post} key={post.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};  