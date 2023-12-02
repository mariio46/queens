import CoverImage from '@/public/images/cover.png';
import Image from 'next/image';

export default function Header() {
    return (
        <div className='overflow-hidden'>
            <Image src={CoverImage} alt='Sampul' width={500} height={500} className='w-full object-cover' />
        </div>
    );
}
