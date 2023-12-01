'use client';

import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export function Signin() {
    return (
        <button
            onClick={() => signIn()}
            className='rounded bg-zinc-950 px-6 py-2 text-sm text-white hover:bg-zinc-800 focus:outline-none focus:ring focus:ring-zinc-800 focus:ring-offset-2 active:bg-zinc-700'>
            signIn
        </button>
    );
}

export function Login() {
    return (
        <Link
            href={'/login'}
            className='rounded bg-zinc-950 px-6 py-2 text-sm text-white hover:bg-zinc-800 focus:outline-none focus:ring focus:ring-zinc-800 focus:ring-offset-2 active:bg-zinc-700'>
            Login
        </Link>
    );
}

export function Register() {
    return (
        <Link
            href={'/register'}
            className='rounded bg-zinc-950 px-6 py-2 text-sm text-white hover:bg-zinc-800 focus:outline-none focus:ring focus:ring-zinc-800 focus:ring-offset-2 active:bg-zinc-700'>
            Register
        </Link>
    );
}

export function Logout() {
    return (
        <button
            onClick={() => signOut()}
            className='rounded border border-zinc-300 bg-zinc-50 px-6 py-2 text-sm text-zinc-950 hover:bg-zinc-200 focus:outline-none focus:ring focus:ring-zinc-200 focus:ring-offset-2 active:bg-zinc-300'>
            Logout
        </button>
    );
}
