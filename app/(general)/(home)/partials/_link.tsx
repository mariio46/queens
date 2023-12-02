import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    IconBrandAppgallery,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTelegram,
    IconBrandWhatsapp,
    IconBuildingStore,
    IconMapPin,
    IconWorldWww,
} from '@tabler/icons-react';
import Link from 'next/link';

export default function Links() {
    return (
        <div className='mt-20'>
            <div className='my-5'>
                <div className='grid grid-cols-1 gap-4 px-3 md:grid-cols-2'>
                    <Link
                        href={'#'}
                        className='inline-flex items-center gap-x-2 rounded border px-4 py-2 text-sm font-medium transition duration-300 hover:bg-accent'>
                        <IconBuildingStore className='h-6 w-6 stroke-[1.3]' />
                        Offline Store
                    </Link>
                    <Link
                        href={'#'}
                        className='inline-flex items-center gap-x-2 rounded border px-4 py-2 text-sm font-medium transition duration-300 hover:bg-accent'>
                        <IconBrandAppgallery className='h-6 w-6 stroke-[1.3]' />
                        Online Store
                    </Link>
                    <Link
                        href={'#'}
                        className='inline-flex items-center gap-x-2 rounded border px-4 py-2 text-sm font-medium transition duration-300 hover:bg-accent'>
                        <IconWorldWww className='h-6 w-6 stroke-[1.3]' />
                        Website
                    </Link>
                    <Link
                        href={'#'}
                        className='inline-flex items-center gap-x-2 rounded border px-4 py-2 text-sm font-medium transition duration-300 hover:bg-accent'>
                        <IconMapPin className='h-6 w-6 stroke-[1.3]' />
                        Location
                    </Link>
                </div>
            </div>
            <Separator />
            <div className='my-5'>
                <div className='flex flex-wrap items-center justify-center gap-x-4'>
                    <Link href={'#'} className={buttonVariants({ variant: 'outline', className: 'gap-x-2' })}>
                        <IconBrandInstagram className='h-6 w-6 stroke-[1.3]' />
                        Instgram
                    </Link>
                    <Link href={'#'} className={buttonVariants({ variant: 'outline', className: 'gap-x-2' })}>
                        <IconBrandFacebook className='h-6 w-6 stroke-[1.3]' />
                        Facebook
                    </Link>
                    <Link href={'#'} className={buttonVariants({ variant: 'outline', className: 'gap-x-2' })}>
                        <IconBrandTelegram className='h-6 w-6 stroke-[1.3]' />
                        Telegram
                    </Link>
                    <Link href={'#'} className={buttonVariants({ variant: 'outline', className: 'gap-x-2' })}>
                        <IconBrandWhatsapp className='h-6 w-6 stroke-[1.3]' />
                        Whatsapp
                    </Link>
                </div>
            </div>
        </div>
    );
}
