import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex w-full h-[90px] bg-[#5D0BF34D] shadow-xl justify-between items-center px-10 font-[inter]'>
        <div className='flex w-27 h-28'>
            <img src="/gambar/B-removebg-preview 1.png" alt="" />
        </div>
        <div className=''>
            <a href="" className='mx-4 font-[inter] text-lg'>Beranda</a>
            <a href="" className='mx-4 font-[inter] text-lg'>Tentang</a>
            <a href="" className='mx-4 font-[inter] text-lg'>Edukasi</a>
            <a href="" className='ml-4 mr-10 font-[inter] text-lg'>Berita</a>
            <button className='bg-[#6742A9] rounded-2xl w-25 h-10 text-[#FFFFFF] font-[inter] text-'>Login</button>
        </div>
    </nav>

  )
}

export default Navbar
