'use client';

import PrimaryLink from '@/components/primary-link';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';

export default function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { toast } = useToast();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            await axios.post('/api/register', {
                name: name,
                email: email,
                password: password,
            });
            toast({
                title: 'Register Successfully',
                description: 'Your credentials has been stored to the server, now lets login!',
            });
            router.push('/login');
        } catch (err: any) {
            console.log(err.message);
            setError(err.message);
        }
    };
    return (
        <form onSubmit={submit}>
            <CardContent>
                <div>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id='name'
                        name='name'
                        type='name'
                        autoComplete='name'
                        className='mt-1 block w-full'
                        autoFocus
                        required
                    />
                </div>
                <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id='email'
                        name='email'
                        type='email'
                        autoFocus
                        autoComplete='email'
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
                    <PrimaryLink href={'/login'}>login?</PrimaryLink>
                    <Button className='ml-4'>Register</Button>
                </div>
            </CardFooter>
        </form>
    );
}
