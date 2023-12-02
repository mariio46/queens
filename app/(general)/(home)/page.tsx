import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import CoverImage from '@/public/images/cover.png';
import ProductImage from '@/public/images/product.png';
import ProfileImage from '@/public/images/profile.png';
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
import Image from 'next/image';
import Link from 'next/link';

type ProductsType = {
    id: number;
    image: any;
};

const products = [
    {
        id: 1,
        image: ProductImage,
    },
    {
        id: 2,
        image: ProductImage,
    },
    {
        id: 3,
        image: ProductImage,
    },
    {
        id: 4,
        image: ProductImage,
    },
    {
        id: 5,
        image: ProductImage,
    },
    {
        id: 6,
        image: ProductImage,
    },
    {
        id: 7,
        image: ProductImage,
    },
    {
        id: 8,
        image: ProductImage,
    },
    {
        id: 9,
        image: ProductImage,
    },
    {
        id: 10,
        image: ProductImage,
    },
];

export default function Home() {
    return (
        <div className='overflow-hidden rounded-none border bg-card text-card-foreground shadow sm:my-20 sm:rounded-xl'>
            <div className='overflow-hidden'>
                <Image src={CoverImage} alt='Sampul' width={500} height={500} className='w-full object-cover' />
            </div>
            <div className='-mt-10 flex items-center justify-center'>
                <Image
                    src={ProfileImage}
                    alt='Profile'
                    width={500}
                    height={500}
                    className='h-20 w-20 rounded-full object-cover sm:h-28 sm:w-28'
                />
            </div>
            <div className='my-10 text-center'>
                <div className='mb-4'>
                    <h1 className='text-2xl font-bold'>Nhanas Donuts</h1>
                    <p className='text-sm font-medium italic'>Ada kelembutan dalam setiap gigitannya.</p>
                </div>
                <h3 className='text-base font-medium'>Buka setiap hari!</h3>
                <div className='text-sm'>
                    <p>Senin &minus; Jumat | 08 &#58; 00 &minus; 20 &#58; 00</p>
                    <p>Sabtu &minus; Minggu | 09 &#58; 00 &minus; 20 &#58; 00</p>
                </div>
            </div>
            <div className='my-5'>
                <div className='flex snap-x snap-mandatory items-center gap-x-4 overflow-x-auto py-2'>
                    {products.map((product: ProductsType) => (
                        <div key={product.id} className='w-2/3 shrink-0 snap-center rounded bg-accent p-2 sm:w-1/2'>
                            <Image
                                src={product.image}
                                alt='product'
                                width={700}
                                height={700}
                                className='h-2/5 w-full snap-center rounded-sm'
                            />
                            <div className='p-2'>
                                <h4 className='text-lg font-semibold'>Kue Ulang Tahun</h4>
                                <p className='text-sm tracking-tight'>Kue ulang tahun untuk semua kalangan</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='my-5'>
                <div className='grid grid-cols-1 gap-4 px-3 md:grid-cols-2'>
                    <Link
                        href={'#'}
                        className='inline-flex items-center gap-x-2 rounded border px-4 py-2 transition duration-300 hover:bg-accent'>
                        <IconBuildingStore className='h-6 w-6 stroke-[1.3]' />
                        Offline Store
                    </Link>
                    <Link
                        href={'#'}
                        className='inline-flex items-center gap-x-2 rounded border px-4 py-2 transition duration-300 hover:bg-accent'>
                        <IconBrandAppgallery className='h-6 w-6 stroke-[1.3]' />
                        Online Store
                    </Link>
                    <Link
                        href={'#'}
                        className='inline-flex items-center gap-x-2 rounded border px-4 py-2 transition duration-300 hover:bg-accent'>
                        <IconWorldWww className='h-6 w-6 stroke-[1.3]' />
                        Website
                    </Link>
                    <Link
                        href={'#'}
                        className='inline-flex items-center gap-x-2 rounded border px-4 py-2 transition duration-300 hover:bg-accent'>
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
