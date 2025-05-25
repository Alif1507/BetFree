import React, { useState } from 'react';

interface NewsItem {
  img: string;
  source: string;
  title: string;
}

const Berita: React.FC = () => {
  const newsDataHari: NewsItem[] = [
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
  ];

  const newsDataMinggu: NewsItem[] = [
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
        Cek Berita Sekarang
      </button>

      <div className='flex flex-col items-center mt-30'>
        <img src="gambar/www.reallygreatsite.com (1) 1.png" alt="Banner" />
      </div>

      <div className='flex items-center justify-evenly mt-10 w-full'>
        <div onClick={clickHari} className={`flex flex-col  items-center gap-2 transition-all duration-150 hover:opacity-100 ${hari ? "" : 'opacity-40'}  ${bulan ? "" : "cursor-pointer"}`}>
        <h1 className={`text-3xl font-semibold  ${hari ? "" : "cursor-pointer"}`}>HARI INI</h1>
        <hr className='border-purple-900 border-2 w-[288px]' />
        </div>
        <div onClick={clickMinggu} className={`flex flex-col transition-all duration-150 hover:opacity-100 items-center gap-2 ${minggu ? "" : 'opacity-40'} ${bulan ? "" : "cursor-pointer"}`}>
        <h1 className={`text-3xl font-semibold ${minggu ? "" : "cursor-pointer"}`}>MINGGU INI</h1>
        <hr className='border-purple-900 border-2 w-[288px]' />
        </div>
        <div onClick={clickBulan} className={`flex flex-col transition-all duration-150 hover:opacity-100 items-center gap-2 ${bulan ? "" : 'opacity-40'} ${bulan ? "" : "cursor-pointer"}`}>
        <h1 className={`text-3xl font-semibold ${bulan ? "" : "cursor-pointer"}`}>BULAN INI</h1>
        <hr className='border-purple-900 border-2 w-[288px]' />
        </div>
      </div>
      <div className={`grid grid-cols-4 grid-rows-2 gap-5  mt-10 ${hari ? "" : "hidden"}`}>
        {newsDataHari.map((item, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <img src={item.img} alt={item.title} />
            <h1 className='text-xs'>{item.source}</h1>
            <p className='max-w-[280px] text-sm'>{item.title}</p>
          </div>
        ))}
      </div>

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

    </div>
  );
};

export default Berita;
