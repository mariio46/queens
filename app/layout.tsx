import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: `${process.env.APP_NAME}`,
    description: 'Authentication application using NextAuth.JS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={cn(figtree.className, 'font-sans antialiased')}>
                <Providers>{children}</Providers>
                <Toaster />
            </body>
        </html>
    );
}
