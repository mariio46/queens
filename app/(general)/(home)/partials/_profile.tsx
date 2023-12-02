import Image from 'next/image';
import ProfileImage from '@/public/images/profile.png';

export default function Profile() {
    return (
        <div className='relative -mt-10 flex items-center justify-center'>
            <div className='absolute h-20 w-20 rounded-full border-[3.5px] border-dashed border-yellow-500 hover:animate-spin hover:[animation-duration:10s]  sm:h-28 sm:w-28' />
            <Image
                src={ProfileImage}
                alt='Profile'
                width={500}
                height={500}
                className='h-20 w-20 rounded-full object-cover p-1.5 sm:h-28 sm:w-28'
            />
        </div>
    );
}
