import React from "react";
import Link from "next/link";
import BackgroundImage from "@/components/Background-image";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen  overflow-hidden">

       <BackgroundImage src="https://www.rismedia.com/wp-content/uploads/2022/06/4_crucial_tips_donating-iStock-1339697803.jpg" />
      
      <h1 className="text-4xl font-bold text-gray-200 mb-4 ">Welcome to KindLink</h1>
      <p className="text-lg text-gray-400 mb-8 text-center max-w-xl">
        Connect, collaborate, and make a difference. Start your journey with KindLink today!
      </p>
      <div className="flex space-x-4">
        <Link
          href="/login"
          className="px-6 py-2 bg-amber-600 text-white rounded hover:bg-amber-500 transition"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="px-6 py-2 bg-white border border-amber-600 text-amber-600 rounded hover:bg-amber-50 transition"
        >
          Register
        </Link>
        </div>
    </main>
  );
}
