// _app.tsx
import { AppProps } from 'next/app';
import '../styles/globals.css'

// Import your navbar and footer components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import any context providers or additional setup here
// For example: import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Wrap your application with layout components or context providers here
    // For example: <AuthProvider>
    <div>
      <Navbar /> {/* Include your navbar */}
      <Component {...pageProps} />
      <Footer /> {/* Include your footer */}
    </div>
    // Close any context providers here if you opened them above
    // For example: </AuthProvider>
  );
}

export default MyApp;
