import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NewsItem {
  img: string;
  source: string;
  title: string;
}

type TimeFilter = 'hari' | 'minggu' | 'bulan';

const Berita: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<TimeFilter>('hari');

  const newsData: Record<TimeFilter, NewsItem[]> = {
    hari: [
      {
        img: "gambar/image-6.png",
        source: "SuaraData.com",
        title: "Polres Tuban Digugat Praperadilan, Diduga Tak Sesuai SOP saat Penangkapan Pelaku Judi Online"
      },
      {
        img: "gambar/image.png",
        source: "Tribatanews Polda Jabar",
        title: "Polda Jabar Ungkap Kasus Perjudian Online: Dua Tersangka Ditangkap, Diduga Kelola Website Judi dengan Omset Ratusan Juta Per Hari"
      },
      {
        img: "gambar/image-2.png",
        source: "Tempo.co",
        title: "Polri Bongkar 3 Situs Judi Online, Sebut Sulit Diberantas Walau Telah Diblokir"
      },
      {
        img: "gambar/image-4.png",
        source: "Kementerian Komunikasi dan Digital",
        title: "Presiden Amanatkan Pemberantasan Judi Online, Kemkomdigi Tingkatkan Pengawasan"
      },
      {
        img: "gambar/image-7.png",
        source: "BBC",
        title: "Polisi tetapkan 24 tersangka sindikat judol Komdigi – Bagaimana modus operandi dan apa peran mereka?"
      },
      {
        img: "gambar/image-1.png",
        source: "detikNews",
        title: "Bareskrim Tetapkan 2 Tersangka TPPU Judi Online Usai Sita Hotel di Semarang"
      },
      {
        img: "gambar/image-3.png",
        source: "Polres Pelabuhan Tanjung Perak",
        title: "Polsek Krembangan Ungkap Kasus Judi Online di Kedai Kopi de Genk Surabaya"
      },
      {
        img: "gambar/image-5.png",
        source: "CAKAPLAH.com",
        title: "Polda Riau Ungkap 11 Kasus Judi Online, 16 Tersangka Ditangkap"
      }
    ],
    minggu: [
      {
        img: "gambar/mingguan/image-6.png",
        source: "Tempo.co",
        title: "Kabar Terbaru Judi Online: Tersangka Kasus Komdigi Jadi 23 sampai Budi Arie Adukan Tempo ke Dewan Pers"
      },
      {
        img: "gambar/mingguan/image.png",
        source: "ANTARA News Makassar",
        title: "Melihat sisi penindakan dalam pemberantasan judi 'online'"
      },
      {
        img: "gambar/mingguan/image-2.png",
        source: "Sudut Berita",
        title: "Polda Aceh Ungkap 55 Kasus Judi Online"
      },
      {
        img: "gambar/mingguan/image-4.png",
        source: "detik.com",
        title: "Program 100 Hari Berantas Judi Online, Polisi Surabaya Amankan 1 Pelaku"
      },
      {
        img: "gambar/mingguan/image-7.png",
        source: "Kementerian Komunikasi dan Digital",
        title: "Berantas Judi Online, Satgas Ambil Tiga Langkah Operasi Hukum"
      },
      {
        img: "gambar/mingguan/image-1.png",
        source: "Kompas.com",
        title: "Bukti Kasus Judi 'Online' Dibekingi Pegawai Komdigi, dari Uang Rp 73 Miliar hingga Senjata Api"
      },
      {
        img: "gambar/mingguan/image-3.png",
        source: "SINDOnews Nasional",
        title: "Kasus Judi Online di Komdigi, Budi Arie Merasa Dikhianati Mantan Anak Buahnya"
      },
      {
        img: "gambar/mingguan/image-5.png",
        source: "CAKAPLAH.com",
        title: "Polda Riau Ungkap 11 Kasus Judi Online, 16 Tersangka Ditangkap"
      }
    ],
    bulan: [
      {
        img: "gambar/bulanan/image.png",
       source: "detik.com",
        title: "Deretan Kasus Judi Online Paling Menyedot Perhatian di Jawa Barat"
      },
      {
        img: "gambar/bulanan/image-1.png",
        source: "Tempo.co",
        title: "Sederet Fakta Judi Online yang Disorot Publik Sepanjang 2024, Siapa Sosok Inisial T?"
      },
      {
        img: "gambar/bulanan/image-2.png",
        source: "Tribratanews Polda Jabar",
        title: "Polda Jabar Ungkap Kasus Perjudian Online: Dua Tersangka Ditangkap, Diduga Kelola Website Judi dengan Omset Ratusan Juta Per Hari"
      },
      {
        img: "gambar/bulanan/image-3.png",
        source: "ANTARA News Makassar",
        title: "Melihat sisi penindakan dalam pemberantasan judi 'online'"
      },
      {
        img: "gambar/bulanan/image-4.png",
        source: "BBC",
        title: "Polisi tetapkan 24 tersangka sindikat judol Komdigi – Bagaimana modus operandi dan apa peran mereka?"
      },
      {
        img: "gambar/bulanan/image-5.png",
        source: "Suara.com",
        title: "Meutya Hafid Pamer Capaian Jabat Komdigi 5 Bulan: Blokir 6 Juta Konten Judi Online"
      },
      {
        img: "gambar/bulanan/image-6.png",
        source: "Kompas.com",
        title: "300 Kasus Judi Online Diungkap Polri Sepanjang Juni-November 2024, 370 Tersangka Ditangkap"
      },
      {
        img: "gambar/bulanan/image-7.png",
        source: "CNN Indonesia",
        title: "Update Kasus Judi Online Komdigi: 23 Tersangka, 2 Masih Buron"
      }
    ]
  };

  const filterButtons: Record<TimeFilter, string> = {
    hari: 'HARI INI',
    minggu: 'MINGGU INI',
    bulan: 'BULAN INI'
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
<<<<<<< HEAD
  ];

  const newsDataBulan: NewsItem[] = [
    {
      img: "gambar/bulanan/image.png",
     source: "detik.com",
      title: "Deretan Kasus Judi Online Paling Menyedot Perhatian di Jawa Barat"
    },
    {
      img: "gambar/bulanan/image-1.png",
      source: "Tempo.co",
      title: "Sederet Fakta Judi Online yang Disorot Publik Sepanjang 2024, Siapa Sosok Inisial T?"
    },
    {
      img: "gambar/bulanan/image-2.png",
      source: "Tribratanews Polda Jabar",
      title: "Polda Jabar Ungkap Kasus Perjudian Online: Dua Tersangka Ditangkap, Diduga Kelola Website Judi dengan Omset Ratusan Juta Per Hari"
    },
    {
      img: "gambar/bulanan/image-3.png",
      source: "ANTARA News Makassar",
      title: "Melihat sisi penindakan dalam pemberantasan judi 'online'"
    },
    {
      img: "gambar/bulanan/image-4.png",
      source: "BBC",
      title: "Polisi tetapkan 24 tersangka sindikat judol Komdigi – Bagaimana modus operandi dan apa peran mereka?"
    },
    {
      img: "gambar/bulanan/image-5.png",
      source: "Suara.com",
      title: "Meutya Hafid Pamer Capaian Jabat Komdigi 5 Bulan: Blokir 6 Juta Konten Judi Online"
    },
    {
      img: "gambar/bulanan/image-6.png",
      source: "Kompas.com",
      title: "300 Kasus Judi Online Diungkap Polri Sepanjang Juni-November 2024, 370 Tersangka Ditangkap"
    },
    {
      img: "gambar/bulanan/image-7.png",
      source: "CNN Indonesia",
      title: "Update Kasus Judi Online Komdigi: 23 Tersangka, 2 Masih Buron"
    }
  ];

  const [hari, setHari] = useState(true)
  const [minggu, setMinggu] = useState(false)
  const [bulan, setBulan] = useState(false)

  const clickHari = () => {
    setHari(true)
    setMinggu(false)
    setBulan(false)
  }

  const clickMinggu = () => {
    setHari(false)
    setMinggu(true)
    setBulan(false)
  }

  const clickBulan = () => {
    setHari(false)
    setMinggu(false)
    setBulan(true)
  }

  return (
    <div className='mt-32 flex flex-col items-center justify-center'>
      <button className='bg-gradient-to-r from-[#2D4FA8] to-[#9747FF] text-white text-xl w-[230px] h-[50px] rounded-2xl'>
=======
  };

  return (
    <div className='mt-32 flex flex-col items-center justify-center max-w-7xl mx-auto px-4'>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='bg-gradient-to-r from-[#2D4FA8] to-[#9747FF] text-white text-xl p-4 rounded-2xl shadow-lg'
      >
>>>>>>> 9a19a0d9a5d4917d53d8f0f8e184c019d9446109
        Cek Berita Sekarang
      </motion.button>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='flex flex-col items-center mt-10'
      >
        <img 
          src="gambar/www.reallygreatsite.com (1) 1.png" 
          alt="Banner" 
          className='rounded-lg shadow-md'
        />
      </motion.div>

      <div className='flex items-center justify-evenly mt-10 w-full'>
        {Object.entries(filterButtons).map(([key, label]) => (
          <motion.div
            key={key}
            onClick={() => setActiveFilter(key as TimeFilter)}
            whileHover={{ opacity: 1 }}
            className={`flex flex-col items-center gap-2 cursor-pointer ${
              activeFilter === key ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <h1 className='text-3xl font-semibold'>{label}</h1>
            <motion.hr
              initial={false}
              animate={{
                width: activeFilter === key ? '100%' : '0%',
                borderColor: '#44337A'
              }}
              className='border-2 w-[288px]'
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

<<<<<<< HEAD
      <div className={`grid grid-cols-4 grid-rows-2 gap-5  mt-10 ${minggu ? "" : "hidden"}`}>
        {newsDataMinggu.map((item, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <img src={item.img} alt={item.title} />
            <h1 className='text-xs'>{item.source}</h1>
            <p className='max-w-[280px] text-sm'>{item.title}</p>
          </div>
        ))}
      </div>

      <div className={`grid grid-cols-4 grid-rows-2 gap-5  mt-10 ${bulan ? "" : "hidden"}`}>
        {newsDataBulan.map((item, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <img src={item.img} alt={item.title} />
            <h1 className='text-xs'>{item.source}</h1>
            <p className='max-w-[280px] text-sm'>{item.title}</p>
          </div>
        ))}
      </div>

=======
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'
        >
          {newsData[activeFilter].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='flex flex-col gap-3 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={item.img}
                alt={item.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h1 className='text-xs text-gray-600 mb-2'>{item.source}</h1>
                <p className='text-sm font-medium line-clamp-3 hover:line-clamp-none'>
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
>>>>>>> 9a19a0d9a5d4917d53d8f0f8e184c019d9446109
    </div>
  );
};

export default Berita;
