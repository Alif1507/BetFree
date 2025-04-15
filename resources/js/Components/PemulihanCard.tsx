import React from 'react'

function PemulihanCard({tujuan, hari,catatan}) {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-[#5D0BF3] bg-clip-border text-gray-700 shadow-md">
                            <div className="p-6">
                                <h5 className="mb-2 block font-sans text-xl text-white font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {tujuan}{" "}
                                    <sup className='bg-[#FF0000] py-2 px-1 rounded-xl'>{hari}</sup>
                                </h5>
                                <p className="block font-sans text-base text-white font-light leading-relaxed antialiased">
                                    {catatan}
                                </p>
                            </div>
                            <div className="p-6 pt-0">
                                <a href="">
                                    <button
                                        data-ripple-light="true"
                                        type="button"
                                        className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    >
                                        Read More
                                    </button>
                                </a>
                            </div>
                        </div>
  )
}

export default PemulihanCard