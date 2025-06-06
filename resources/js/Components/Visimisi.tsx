import React, { useState } from 'react'

function Visimisi() {
  const [visi, setVisi] = useState(true);
  const [kisah, setkisah] = useState(false);

  const visiHandler = () => {
    setVisi(true);
    setkisah(false);
  };

  const kisahHandler = () => {
    setVisi(false);
    setkisah(true);
  };

  return (
    <div className='flex ml-40 mt-52 mb-32 relative' id='tentang'>
      <div className={`absolute ${kisah ? "left-0" : "-left-[1000px]"} top-0 transition-all duration-300`}>
      <h1 className='font-bold  text-4xl mb-5'>VISI MISI KAMI</h1>
      <p className='text-2xl max-w-[800px]'>
        membantu invidu dari pengaruh dan kecanduan judi online, membangun kembali kehidupan mereka, dan menciptakan masyarakat yang sehat terbebas dari judi. Kami menyedaikan informasi yang akurat tentang dampak judi online serta mengatasinya melalui artikel dan konten interaktif
      </p>
      <hr className='w-[450px] border-[#512DA8] mt-4' />
      <div className='flex gap-5 mt-5'>
        <img className='cursor-pointer' src="gambar/Group 21.png" alt="" />
        <h1 onClick={visiHandler} className='text-xl text-[#512DA8] hover:underline cursor-pointer'>Kisah Kami {"<"}</h1>
      </div>
      </div>

      <div className={`opacity-0 pointer-events-none ${kisah ? "left-0" : "-left-[1000px]"} top-0 transition-all duration-300`}>
      <h1 className='font-bold text-4xl mb-5'>VISI MISI KAMI</h1>
      <p className='text-2xl max-w-[800px]'>
        membantu invidu dari pengaruh dan kecanduan judi online, membangun kembali kehidupan mereka, dan menciptakan masyarakat yang sehat terbebas dari judi. Kami menyedaikan informasi yang akurat tentang dampak judi online serta mengatasinya melalui artikel dan konten interaktif
      </p>
      <hr className='w-[450px] border-[#512DA8] mt-4' />
      <div className=''>.</div>
      <div className='flex gap-5 mt-5'>
        <img className='cursor-pointer' src="gambar/Group 21.png" alt="" />
        <h1 onClick={visiHandler} className='text-xl text-[#512DA8] hover:underline cursor-pointer'>Kisah Kami {"<"}</h1>
      </div>
      </div>







      <div className={`absolute ${visi ? "left-0" : "-left-[1000px]"} top-0 transition-all duration-300`}>
      <h1 className='font-bold text-4xl mb-5'>KISAH KAMI</h1>
      <p className='text-2xl max-w-[800px]'>
        Kami sangat ingin membantu para pecandu judi online karena banyak dari kerabat teman dekat kami mengalami hal yang sama dan pastinya juga banyak yang seperti itu diluar sana, maka dari itu kami membuka pintu untuk para pecandu judi online yang ingin memulai hidup yang sehat
      </p>
      <hr className='w-[450px] border-[#512DA8] mt-4' />
      <div className='flex gap-5 mt-5'>
        <img className='cursor-pointer' src="gambar/frame 10.png" alt="" />
        <h1 onClick={kisahHandler} className='text-xl text-[#512DA8] hover:underline cursor-pointer'>Visi Misi Kami {"<"} </h1>

      </div>

      </div>
    </div>
  )
}

export default Visimisi
