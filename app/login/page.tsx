"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button  from '@/components/Button';
import  Input  from '@/components/Input';
//import clsx from 'clsx';
import '../globals.css';
import GoogleLoginButton from "@/components/GoogleLoginButton";
import KindLinkHeader from '@/components/KindLinkHeader';


export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        // TODO: Replace with real authentication logic
        if (email === '' || password === '') {
            setError('Please enter both email and password.');
            return;
        }
        // Simulate login
        try {
            // await login(email, password);
            router.push('/dashboard');
        } catch (err) {
            setError('Invalid credentials.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 ">
            <KindLinkHeader/>
            <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-md  backdrop-blur-md">
                
                <h2 className="text-2xl font-bold mb-6 text-center">Sign in to your account</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <Input
                        label="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="you@example.com"
                    />
                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                    />
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    <Button type="submit" className="w-full">
                        Sign In
                    </Button>
                    <GoogleLoginButton />
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-blue-600 hover:underline">
                        Register
                    </Link>
                </p>
                
            </div>
        </div>
    );
}