'use client';

import PrimaryLink from '@/components/primary-link';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';

export function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const res = await signIn('credentials', {
                redirect: false,
                email,
                password,
                callbackUrl,
            });
            if (!res?.error) {
                router.push(callbackUrl);
            } else {
                setError('Your credentials is invalid!');
            }
        } catch (e: any) {
            console.log(e.message);
        }
    };

    return (
        <form onSubmit={submit}>
            <CardContent>
                <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id='email'
                        name='email'
                        type='email'
                        autoFocus
                        autoComplete='off'
                        className='mt-1 block w-full'
                        required
                    />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='password'>Password</Label>
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='off'
                        className='mt-1 block w-full'
                        required
                    />
                </div>
                {error && (
                    <div className='mt-4 rounded-lg bg-red-100 p-2'>
                        <p className='text-xs text-destructive'>{error}</p>
                    </div>
                )}
            </CardContent>
            <CardFooter className='mt-4 justify-between'>
                <PrimaryLink href={'/'}>back</PrimaryLink>
                <div>
                    <PrimaryLink href={'/register'}>register?</PrimaryLink>
                    <Button className='ml-4'>Log in</Button>
                </div>
            </CardFooter>
        </form>
    );
}
