import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen relative gap-32 z-20 items-center bg-gradient-to-r from-slate-50 to-purple-300 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
            

            <div className="mt-6 w-full overflow-hidden bg-transparent border-[#760686] border-2 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>

            <div className='relative z-30'>
                <img src="/gambar/B-removebg-preview 1.png" alt="" />
            </div>

            <div className='absolute right-0 bottom-0'>
                <img src="/gambar/Stop Gambling (3) 3.png" alt="" />
            </div>


        </div>
    );
}
