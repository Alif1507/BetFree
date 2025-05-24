import Fitur from '@/Components/Fitur';
import Hero from '@/Components/Hero';
import PemulihanCard from '@/Components/PemulihanCard';
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
                                </main>


    </>
  )
}

export default Welcome
