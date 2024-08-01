import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/Components/Navbar';
import Footer from '@/app/Components/Footer';
import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wagtail sustainable site',
  description: 'A sustainable site using headless wagtail and Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className}`}>
        <NextUIProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-light_gray">{children}</main>
            <Footer />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
