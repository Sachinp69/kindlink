"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const GoogleLoginButton = () => {
  return (
    <button
      type="button"
      onClick={() => signIn("google", { callbackUrl: "/main" })}
      className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:cursor-pointer hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded transition-colors"
    >
      <Image
        src="/google.svg"
        alt="Google logo"
        width={20}
        height={20}
        className="drop-shadow-md"
      />
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;
