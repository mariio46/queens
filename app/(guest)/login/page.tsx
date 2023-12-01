import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import { LoginForm } from './_form';

export const metadata: Metadata = {
    title: 'Login / Queens',
};

export default function Login() {
    return (
        <Card className='w-full max-w-md'>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>enter your crendentials to continue.</CardDescription>
            </CardHeader>
            <LoginForm />
        </Card>
    );
}
