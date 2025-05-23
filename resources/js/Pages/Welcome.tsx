import Fitur from '@/Components/Fitur';
import Hero from '@/Components/Hero';
import Navbar from '@/Components/Navbar';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

const Welcome = ({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
           <Navbar />
           <Hero />
           <Fitur />
        </>
    );
}
