import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import User from '@/app/user';
import { Login, Logout, Register, Signin } from '@/components/auth-navigation';
import Link from 'next/link';

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <div className='text-center'>
                <div>
                    <h2>Server Side</h2>
                    <p>name: {JSON.stringify(session)}</p>
                    {/* <p>id: {JSON.stringify(session?.user?.id)}</p>
                    <p>name: {JSON.stringify(session?.user?.name)}</p>
                    <p>email: {JSON.stringify(session?.user?.email)}</p>
                    <p>key: {JSON.stringify(session?.user?.randomKey)}</p> */}
                </div>
                <div>
                    <h2>Client Side</h2>
                    <User />
                </div>
            </div>
            <div className='mt-8 flex items-center justify-center gap-x-4'>
                {!session ? (
                    <div className='flex items-center gap-x-2'>
                        <Login />
                        <Signin />
                        <Register />
                    </div>
                ) : (
                    <Logout />
                )}
            </div>
            <div className='mt-8 flex items-center justify-center'>
                {!!session && (
                    <Link
                        href='/dashboard'
                        className='rounded bg-zinc-950 px-6 py-2 text-sm text-white hover:bg-zinc-800 focus:outline-none focus:ring focus:ring-zinc-800 focus:ring-offset-2 active:bg-zinc-700'>
                        Dashboard
                    </Link>
                )}
            </div>
        </div>
    );
}
