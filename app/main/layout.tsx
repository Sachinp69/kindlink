import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <div className={inter.className + ' bg-gray-900 min-h-screen'}>
            <Navbar/>
            {children}
        </div>
  )
}

export default layout