import { Link } from '@inertiajs/react';
import React from 'react'

const Fitur = () => {
  return (
    <div className='mt-24 w-full py-7 bg-[#760686] relative text-center text-white h-[520px] justify-center items-center'>
        <img src="/gambar/e (33) 1.png" alt="" className='absolute right-0'/>
        <div className='flex justify-center w-auto'>
            <h1 className='text-3xl font-[inter] p-12'>3 Fitur Yang Dapat Membantu Anda</h1>
        </div>
        <div className='flex justify-center items-center gap-28 px-4 mt-7'>
            <div>
                <Link href='/qna'>
                    <img src="/gambar/e (29) 2.png" alt="" className='hover:scale-110 transition'/>
                </Link>
                <h1 className='mt-5 text-lg'>Pertanyaan</h1>
            </div>
                <div className='bg-[#ffff] rounded-full w-1 h-44'>.</div>
            <div>
                <Link href='/forum'>
                    <img src="/gambar/e (32) 2.png" alt="" className='hover:scale-110 transition cursor-pointer' />
                </Link>
                <h1 className='mt-5 text-lg'>Forum</h1>
            </div>
            <div className='bg-[#ffff] rounded-full w-1 h-44'>.</div>
            <div className='relative z-50'>
                <Link href='/pemulihan'>
                    <img src="/gambar/e (31) 1.png" alt="" className='hover:scale-110 transition cursor-pointer'/>
                </Link>
                <h1 className='mt-5 text-lg'>Rencana Buatan</h1>
            </div>
        </div>
    </div>
  )
}

export default Fitur
