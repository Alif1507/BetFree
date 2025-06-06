import Berita from "@/Components/Berita";
import Dampak from "@/Components/Dampak";
import Fitur from "@/Components/Fitur";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Opanimation from "@/Components/Opanimation";
import PemulihanCard from "@/Components/PemulihanCard";
import Penyebab from "@/Components/Penyebab";
import Statistik from "@/Components/Statistik";
import Visimisi from "@/Components/Visimisi";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import React from "react";

const Welcome = ({
    auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) => {
    return (
        <>
            <Head title="Home" />

            <Opanimation />
            <nav className="flex w-full h-[90px] bg-[#5D0BF34D] shadow-xl justify-between items-center px-10 font-[inter] fixed top-0 z-40">
                <div className="flex w-[110px]">
                    <img
                        src="/gambar/B-removebg-preview 1.png"
                        alt="Logo"
                        className="h-[120px] object-contain"
                    />
                </div>

                <div className="flex gap-10 items-center">
                    <div className="flex gap-8 text-lg text-[#2D0353]">
                        <a href="#hero">Beranda</a>
                        <a href="#tentang">Tentang</a>
                        <a href="#">Berita</a>
                        <a href="#">Edukasi</a>
                    </div>

                    <div className="flex items-center gap-4">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="bg-[#6742A9] text-white rounded-xl px-6 py-[9px] text-sm shadow hover:opacity-90 transition"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="bg-[#6742A9] text-white rounded-xl px-6 py-[9px] text-sm shadow hover:opacity-90 transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="bg-[#6742A9] text-white rounded-xl px-6 py-[9px] text-sm shadow hover:opacity-90 transition"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>


            <main className="h-[2000px] ">
                <Hero  />
                <Fitur />
                <div className="mt-[269px]">
                    <Visimisi />
                </div>
                <Berita />
                <div className="mt-[269px]">
                    <Statistik />
                </div>
                <Dampak />
                <Penyebab />
                <Footer />
            </main>
        </>
    );
};

export default Welcome;
