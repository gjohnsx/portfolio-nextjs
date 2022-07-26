import { ThemeProvider } from 'next-themes';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {

    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;