import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Link } from '@inertiajs/react';

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const images = [
    "/gambar/Property 1=Default.png",
    "/gambar/Property 1=Variant2.png",
    "/gambar/Property 1=Variant3.png",
  ];

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (



    <div className='w-full mt-[50px] flex items-center justify-center relative'>
      <img src="/gambar/e (17) 2.png" alt="" className='absolute left-0' />
      <img src="/gambar/e (17) 2.png" alt="" className='absolute right-0' />

      <div className='flex flex-col justify-center items-center'>
        <div className="relative">
          <img src="/gambar/Stop Gambling (4).png" alt="HP" className="w-full object-contain" />

          <div
            ref={emblaRef}
            className="absolute top-[22%] left-[19%] w-[27%] h-[34%] overflow-hidden rounded-xl"
          >
            <div className="flex h-full">
              {images.map((src, index) => (
                <div className="flex-shrink-0 w-full h-full" key={index}>
                  <img src={src} alt={`slide-${index}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='text-center'>
          <h1 className='text-[#210070] mt-14 text-4xl font-bold'>Bebaskan Diri Dari Judi Online</h1>
          <h2 className='mt-5 text-[#210070] text-xl '>
            Kami membantumu menemukan jalan keluar dari kecanduan judi online dengan dukungan <br />
            profesional dan komunitas.
          </h2>
        </div>

        <Link href='/chatbot'>
        <button className='flex border-2 border-[#3F00D6] w-[120px] items-center justify-center h-[40px] rounded-xl mt-7 cursor-pointer hover:bg-[#3F00D6]'>
            <img src="/gambar/bibot-removebg-preview 1.png" alt="" />
            <p className='text-[#210070] font-medium ml-2'>Bibot</p>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
