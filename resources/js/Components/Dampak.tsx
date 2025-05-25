import { image } from 'motion/react-client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const dampakData = [
    {
        title: "Kecanduan",
        image: "/gambar/Desain tanpa judul (23) 2.png",
        description: "Salah satu dampak paling merusak dari judi online adalah kecanduan. Banyak orang yang awalnya bermain judi online hanya sebagai hobi atau hiburan, tetapi seiring waktu, mereka dapat terperangkap dalam lingkaran ketergantungan yang sulit untuk dilepaskan. Ketergantungan ini dapat merusak kehidupan sosial, ekonomi, dan kesehatan mental seseorang. Pemain yang kecanduan mungkin mengabaikan tanggung jawab sehari-hari, termasuk pekerjaan, sekolah, atau hubungan pribadi."
    },
    {
        title: "Masalah Finansial",
        image: "/gambar/e 1.png",
        description: "Bermain judi online dapat menjadi berbahaya bagi keuangan seseorang. Orang seringkali kehilangan jumlah uang yang signifikan saat berjudi online. Mereka mungkin tergoda untuk terus memasang taruhan dalam harapan mengembalikan kerugian mereka, yang hanya memperburuk situasi keuangan mereka. Kerugian keuangan yang signifikan dapat menyebabkan stres, kecemasan, dan depresi."
    },
    {
        title: "Merusak Generasi Mendatang",
        image: "/gambar/e (3) 1.png",
        description: "Remaja yang masih dalam tahap pencarian jati diri mudah terpengaruh oleh judi online. Paparan ini dapat membentuk kebiasaan buruk dan sikap tidak bertanggung jawab terhadap uang dan waktu, yang berpotensi merusak masa depan mereka. Hal ini juga bisa berdampak untuk negara karena negara bisa kekurangan pemuda pemuda untuk masa depan"
    },
    {
        title: "Kesehatan Mental Terpengaruh",
        image: "/gambar/e (1) 1.png",
        description: "Judi online dapat berdampak buruk pada kesehatan mental seseorang. Kehilangan uang dan perasaan bersalah setelah kekalahan dapat menyebabkan stres dan kecemasan. Pemain yang kecanduan juga dapat mengalami gejala depresi, seperti perasaan sedih yang mendalam dan kehilangan minat pada aktivitas lain di luar perjudian."
    },
    {
        title: "Penurunan Kualitas Tidur",
        image: "/gambar/e (2) 1.png",
        description: "Ketergantungan pada judi online dapat menyebabkan penurunan kualitas hidup secara keseluruhan. Pemain mungkin merasa tertekan dan tidak bahagia karena tekanan keuangan dan masalah pribadi yang timbul akibat perjudian. dan hal ini bisa berdampak pada masalah sosial juga "
    },
];
const Dampak = () => {

  return (
    <div className='mt-56 justify-center '>
        <div className='justify-center flex'>
        <div className='text-center text-white items-center justify-center flex'>
            <div className='justify-center w-[430px]'>
            <img src="/gambar/e (4) 1.png" alt="" />
                <div className='bg-gradient-to-r from-[#F089FF] h-[90px] to-[#905299] text-center rounded-3xl items-center  justify-center text-lg flex'>
                    <h1 className='font-pop'>Sekarang Ayo Kita Cari Tahu Dampak dan <br /> Penyebab Judi Online</h1>
                </div>
                <img src="/gambar/e (5) 1.png" alt="" className='mx-auto mt-18'/>
            </div>
        </div>
        </div>


       <div className='bg-[#760686] h-[820px] mt-52'>
            <div className='text-center flex flex-col items-center  p-20'>
                <h1 className='text-white text-3xl font-[inter] font-'>Dampak Judi Online</h1>
                <div className='bg-gradient-to-r from-[#FFFFFF] to-[#764CDF] w-[330px] h-[3px] mt-2 rounded-2xl'></div>
            </div>

           <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {dampakData.map((item, index) => (
            <SwiperSlide key={index} className="max-w-[340px] max-h-[700px]">
              <div className="bg-gradient-to-tr from-[#F3E5F5] to-[#C394FF] w-[370px] rounded-3xl p-6 text-center  h-[500px] flex flex-col items-center justify-between shadow-2xl shadow-black-800/40">
                <h2 className="text-xl font-semibold my-6">{item.title}</h2>
                <img src={item.image} alt={item.title} className="w-[140px] mb-4" />
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       </div>
    </div>
  )
}

export default Dampak
