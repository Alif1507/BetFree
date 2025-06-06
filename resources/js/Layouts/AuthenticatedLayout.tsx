import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* Main Navbar */}
            <nav className="bg-[#AE85F9] fixed top-0 left-0 w-full z-20 shadow">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 h-[70px]">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img className="w-[60px] h-[60px]" src="/gambar/B-removebg-preview 1.png" alt="LOGO BETFREE" />
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-row gap-8 items-center">
                        <Link href="/" className="text-white font-semibold hover:text-purple-900 transition">Home</Link>
                        <Link href="/pemulihan" className="text-white font-semibold hover:text-purple-900 transition">Rencana</Link>
                        <Link href="/forum" className="text-white font-semibold hover:text-purple-900 transition">Forum</Link>
                        <Link href="/dashboard" className="text-white font-semibold hover:text-purple-900 transition">Dashboard</Link>
                        <Link href="/qna" className="text-white font-semibold hover:text-purple-900 transition">QnA</Link>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-transparent bg-[#6742A9] px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out hover:text-gray-200 focus:outline-none"
                                    >
                                        {user.name}
                                        <svg
                                            className="-me-0.5 ms-2 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setShowingNavigationDropdown((prev) => !prev)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-purple-200 hover:text-purple-900 focus:outline-none transition"
                        >
                            <svg
                                className="h-7 w-7"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={showingNavigationDropdown ? 'hidden' : 'inline-flex'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Dropdown */}
                <div className={`md:hidden bg-[#AE85F9] transition-all duration-300 overflow-hidden ${showingNavigationDropdown ? 'max-h-[400px] py-2' : 'max-h-0 py-0'}`}>
                    <div className="flex flex-col gap-2 px-6">
                        <Link href="/" className="text-white py-2 font-semibold hover:text-purple-900 transition">Home</Link>
                        <Link href="/pemulihan" className="text-white py-2 font-semibold hover:text-purple-900 transition">Rencana</Link>
                        <Link href="/forum" className="text-white py-2 font-semibold hover:text-purple-900 transition">Forum</Link>
                        <Link href="/dashboard" className="text-white py-2 font-semibold hover:text-purple-900 transition">Dashboard</Link>
                        <Link href="/qna" className="text-white py-2 font-semibold hover:text-purple-900 transition">QnA</Link>
                        <div className="border-t border-purple-300 my-2" />
                        <div className="flex items-center gap-2 py-2">
                            <span className="text-white font-semibold">{user.name}</span>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md border border-transparent bg-[#6742A9] px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out hover:text-gray-200 focus:outline-none"
                                        >
                                            <svg
                                                className="h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer for fixed navbar */}
            <div className="h-[70px] md:h-[70px]" />

            {header && (
                <header className="bg-white shadow dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="pt-2">{children}</main>
        </div>
    );
}
