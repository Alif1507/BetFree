import Berita from '@/Components/Berita';
import Dampak from '@/Components/Dampak';
import Fitur from '@/Components/Fitur';
import Hero from '@/Components/Hero';
import Navbar from '@/Components/Navbar';
import PemulihanCard from '@/Components/PemulihanCard';
import Penyebab from '@/Components/Penyebab';
import Statistik from '@/Components/Statistik';
import Visimisi from '@/Components/Visimisi'
import { PageProps } from '@/types';
import { Link } from '@inertiajs/react';
import React from 'react'

const Welcome = ({
    auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) => {
  return (
    <>
       <nav className="flex w-full h-[90px] bg-[#5D0BF34D] shadow-xl justify-between items-center px-10 font-[inter]">
        <div className="flex w-[110px]">
            <img src="/gambar/B-removebg-preview 1.png" alt="Logo" className="h-[120px] object-contain" />
        </div>

        <div className='flex gap-10 items-center'>
        <div className="flex gap-8 text-lg text-[#2D0353]">
            <a href="#">Beranda</a>
            <a href="#">Tentang</a>
            <a href="#">Edukasi</a>
            <a href="#">Berita</a>
        </div>

    <div className="flex items-center gap-4">
        {auth.user ? (
        <Link
            href={route('dashboard')}
            className="bg-[#6742A9] text-white rounded-xl px-6 py-[9px] text-sm shadow hover:opacity-90 transition"
        >
            Dashboard
        </Link>
        ) : (
        <>
        <Link
          href={route('login')}
          className="bg-[#6742A9] text-white rounded-xl px-6 py-[9px] text-sm shadow hover:opacity-90 transition"
        >
          Login
        </Link>
        <Link
          href={route('register')}
          className="bg-[#6742A9] text-white rounded-xl px-6 py-[9px] text-sm shadow hover:opacity-90 transition"
        >
          Register
        </Link>
      </>
    )}
  </div>
</div>

</nav>
           <main>
               <Hero />
               <Fitur />
               <Visimisi />
               <Berita />
               <Statistik />
               <Dampak />
               <Penyebab />
           </main>


    </>
  )
}

export default Welcome
