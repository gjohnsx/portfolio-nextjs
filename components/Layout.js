import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export const siteTitle = 'Gjohnsx Portfolio';

export default function Layout({ children, metaDescription, pageTitle }) {

    return (
        <div className=''>
            <Head>
                <link rel="icon" href='/images/favicon.ico' />
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

            <Footer />

        </div>
    );
};