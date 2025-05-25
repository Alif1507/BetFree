import Berita from '@/Components/Berita';
import Dampak from '@/Components/Dampak';
import Fitur from '@/Components/Fitur';
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
<<<<<<< HEAD
import Navbar from '@/Components/Navbar';
=======
import Opanimation from '@/Components/Opanimation';
>>>>>>> 9a19a0d9a5d4917d53d8f0f8e184c019d9446109
import PemulihanCard from '@/Components/PemulihanCard';
import Penyebab from '@/Components/Penyebab';
import Statistik from '@/Components/Statistik';
import Visimisi from '@/Components/Visimisi'
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import React from 'react'

const Welcome = ({
    auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) => {
  return (
    <>
<<<<<<< HEAD
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
=======
    <Head title="Home" />

    {/* <Opanimation /> */}
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                                <main className='h-[2000px]'>
                                    <Hero />
                                    <Fitur />
                                  <div className='mt-[269px]'>
                                      <Visimisi />
                                  </div>
                                  <Berita />
                                  <div className='mt-[269px]'>
                                    <Statistik />
                                  </div>
                                  <Footer />
                                </main>
>>>>>>> 9a19a0d9a5d4917d53d8f0f8e184c019d9446109


    </>
  )
}

export default Welcome
