import Link from 'next/link';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import socialButtons from '../components/social-buttons';

export default function Contact() {
    return (
        <Layout
            metaDescription='Get in touch with me.'
            pageTitle='Contact'
        >
            <div className='container my-4 lg:my-12'>
                <h1 
                    className="mb-4 text-center text-5xl font-extrabold text-primary text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
                >
                    Contact me
                </h1>
                <ContactForm />
            </div>
        </Layout>
    );
};