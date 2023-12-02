import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { cn } from '@/lib/utils';
import { Logout } from '@/components/auth-navigation';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);
    return (
        <main className={cn('flex min-h-screen items-center justify-center', !!session && 'relative')}>
            {!!session && (
                <div className='absolute bottom-1.5 left-1.5'>
                    <Logout />
                </div>
            )}
            <div className='mx-auto w-full max-w-xl'>{children}</div>
        </main>
    );
}
