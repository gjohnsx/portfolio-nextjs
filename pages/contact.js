import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

const metaDescription = 'Contact me here or on Twitter to talk about your programming needs.';
const pageTitle = 'Contact Me';

export default function Contact() {
    return (
        <>
            <Layout
                metaDescription={metaDescription}
                pageTitle={pageTitle}
            >
                <h1>Contact</h1>
                <p>Contact me...</p>
                <h2>
                    <Link href="/">
                    <a>Back to home</a>
                    </Link>
                </h2>   
            </Layout>
        </>
    )
}