import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import RegisterForm from './_form';

export const metadata: Metadata = {
    title: 'Login / Queens',
};

export default function Regiter() {
    return (
        <Card className='w-full max-w-md'>
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Hii, enter the fields below to register.</CardDescription>
            </CardHeader>
            <RegisterForm />
        </Card>
    );
}
