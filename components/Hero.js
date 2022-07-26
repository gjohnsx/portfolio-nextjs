const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  return (
    <div className="relative overflow-hidden mx-auto px-4 py-2 sm:py-12 max-w-5xl">
        <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Welcome to the portfolio of</span>{' '}
            <span className="block text-primary xl:inline">Gregory Johns</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base-content sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
                <a
                href="#"
                  className='btn btn-primary btn-lg'                
                >
                Get started
                </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                href="#"
                className='btn btn-secondary btn-lg'
                >
                Live demo
                </a>
            </div>
            </div>
        </div>
    </div>
  )
}
