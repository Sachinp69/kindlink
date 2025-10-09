"use client";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import "../globals.css";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import KindLinkHeader from "@/components/KindLinkHeader";
import BackgroundImage from "@/components/Background-image";
import { useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const err = searchParams.get("error");
    const succ = searchParams.get("success");

    if (err) {
      setError(
        err === "CredentialsSignin"
          ? "Invalid email or password."
          : "Authentication error. Please try again."
      );
    }
    if (succ === "registered") {
      setSuccess("Account created successfully! Please log in.");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid credentials.");
    } else {
      router.push("/main/home");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <BackgroundImage src="https://www.rismedia.com/wp-content/uploads/2022/06/4_crucial_tips_donating-iStock-1339697803.jpg" />
      <KindLinkHeader />
      <div className="w-full max-w-md border-transparent border-2 p-8 rounded-lg shadow-lg backdrop-blur-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-500 text-sm">{success}</div>}
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <GoogleLoginButton />
        </form>
        <p className="mt-6 text-center text-sm text-gray-100">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-300 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading login...</div>}>
      <LoginForm />
    </Suspense>
  );
}
