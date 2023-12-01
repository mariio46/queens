export default function AppLayout({ children }: { children: React.ReactNode }) {
    return <main className='mx-auto flex min-h-screen max-w-xl items-center justify-center'>{children}</main>;
}
