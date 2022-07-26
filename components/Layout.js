import Head from 'next/head';
import Header from './Header';

export const siteTitle = 'Gjohnsx Portfolio';

export default function Layout({ children, metaDescription, pageTitle }) {

    return (
        <div className=''>
            <Head>
                {/* <link rel="icon" href='../public/images/5680pairbeanz-prod.png' /> */}
                <title>{pageTitle} - gjohnsx</title>
                <meta
                    name="description"
                    content={metaDescription}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className=''>
                <Header />
            </header>

            <main className=''>
                {children}
            </main>

        </div>
    );
};