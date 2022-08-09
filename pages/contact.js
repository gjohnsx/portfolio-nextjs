import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <Layout
            metaDescription='Get in touch with me.'
            pageTitle='Contact'
        >
            <div className='container my-4 lg:my-12'>
                <h1 
                    className="mb-4 text-center text-5xl font-extrabold text-sky-800 text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
                >
                    Contact me
                </h1>
                {/* <ContactForm /> */}
                <p className='text-center text-gray-700 text-lg mt-12'>
                    Email me at gjohnsx @ fastmail.com,
                    <br />
                    or message me on <a href='https://twitter.com/gjohnsx' className='underline text-sky-500'>Twitter</a> or <a href='https://www.linkedin.com/in/greg-johns/' className='underline text-sky-500'>LinkedIn</a>.
                </p>
            </div>
        </Layout>
    );
};