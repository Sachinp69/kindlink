// filepath: app/main/layout.tsx
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth"; // adjust path if needed

const inter = Inter({ subsets: ['latin'] });

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check for session
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/"); // send to login or landing page
  }

  return (
    <div className={inter.className + 'bg-gradient-to-tr from-gray-700 via-gray-950 to-slate-800 min-h-screen'}>
      <Navbar />
      {children}
    </div>
  );
}
