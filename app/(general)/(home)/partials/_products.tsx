import ProductImage from '@/public/images/product.png';
import Image from 'next/image';

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

export default function ProductsItem() {
    return (
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
    );
}
