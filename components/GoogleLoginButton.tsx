"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const GoogleLoginButton = () => {
  return (
    <button
      type="button"
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-colors"
    >
      <Image
        src="/google.svg"
        alt="Google logo"
        width={20}
        height={20}
        className="drop-shadow-md" // ✅ Tailwind shadow for contrast
      />
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;
