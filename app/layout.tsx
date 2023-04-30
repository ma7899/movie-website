import Navbar from './Navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { FaSearch } from 'react-icons/fa';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'MovHub',
  description: 'Movie website for the Internet',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <>
          <Navbar />
          <div className="sm:mx-32 sm:my-12 p-4">{children}</div>
        </>
      </body>
    </html>
  );
}
