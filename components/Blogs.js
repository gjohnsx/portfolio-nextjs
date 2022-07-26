import Link from "next/link";

export default function Blogs({ posts, heading, showEmail = true }) {

    return (
        <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">

            <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div>
                <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl">
                    {heading}
                </h2>
                    <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
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
                                    // className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
                                    className="input"
                                    placeholder="Enter your email"
                                    />
                                </div>
                                
                                <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                                    <button
                                    type="button"
                                    className='btn btn-primary'
                                    >
                                    Notify me
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                    {posts.map((post) => (
                        <div key={post.id} className='card bg-base-100 shadow-xl mb-2 p-4 justify-start'>
                            <p className="text-sm text-neutral-content">
                                <time dateTime={post.datetime}>{post.date}</time>
                            </p>

                            <Link href={`/posts/${post.id}`}>
                                <a className="mt-2 block">
                                    <p className="text-xl font-semibold">{post.title}</p>
                                    <p className="mt-3 badge badge-accent badge-outline">{post.id}</p>
                                </a>
                            </Link>

                            <div className="mt-3">
                                <Link href={`/posts/${post.id}`}>
                                    <a className="text-base font-semibold text-secondary hover:text-primary-focus">
                                    Read full story
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Use below if you add a featured image to posts/case studies */}
                {/* <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">

                    {posts.map(({ id, date, title }) => (
                    <div className='card card-side bg-base-100 shadow-xl mb-2' key={id}>
                        <figure><img src='https://placeimg.com/400/400/arch' alt='Blog image' className='rounded' /></figure>
                        <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className='badge badge-secondary'>{id}</div>
                        <p>{date}</p>
                        <div className="card-actions justify-end">
                            <Link href='/'>
                            <a className='btn btn-primary'>Read more</a>
                            </Link>
                        </div>
                        </div>
                    </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
};  