import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import KindLinkHeader from '@/components/KindLinkHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KindLink App',
  description: 'A platform for connecting and sharing kindness.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-gray-900 min-h-screen'}>
        <KindLinkHeader />
        {/* You can import and use components from the components directory here, e.g. <Navbar /> */}
        {children}
      </body>
    </html>
  );
}