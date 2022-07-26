import Header from "../components/Header";
import Link from "next/link";

/* This example requires Tailwind CSS v2.0+ */
export default function Custom404() {
    return (
      <>
        <Header />
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <div className="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="max-w-max mx-auto">
            <main className="sm:flex">
              <p className="text-4xl font-extrabold text-primary sm:text-5xl">404</p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Page not found</h1>
                  <p className="mt-1 text-base">Please check the URL in the address bar and try again.</p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                    <Link href='/'>
                        <a
                            // className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary-content bg-primary hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            className='btn btn-primary'
                        >
                            Go back home
                        </a>
                    </Link>
                    <Link href='/contact'>
                        <a
                            // className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-focus hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            className='btn btn-secondary btn-outline'
                        >
                            Contact me
                        </a>
                    </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    )
  }
  