import React, { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
import { Bar } from "react-chartjs-2";

function Statistik() {
    const [cerai, setCerai] = useState(true);

    const ceraihadler = () => {
        setCerai(true);
    };

    const umurhadler = () => {
        setCerai(false);
    };

    return (
        <div className="mt-40">
            <h1
                className={`font-semibold text-2xl text-center ${
                    cerai ? "hidden" : ""
                }`}
            >
                Statistik umur para pengguna
            </h1>
            <div
                className={`flex justify-center w-full mt-19 ${
                    cerai ? "hidden" : ""
                }`}
            >
                <div className="w-[1000px]">
                    <Bar
                        data={{
                            labels: [
                                "<10 Tahun",
                                "10-20 Tahun",
                                "21-30 Tahun",
                                "31-50 Tahun",
                                ">50 Tahun",
                            ],
                            datasets: [
                                {
                                    label: "UMUR",
                                    data: [
                                        50000, 450000, 500000, 1800000, 1350000,
                                        2000000,
                                    ],
                                    backgroundColor: [
                                        "rgb(73, 45, 168, 1)",
                                        "rgb(73, 45, 168, 1)",
                                        "rgb(73, 45, 168, 1)",
                                        "rgb(73, 45, 168, 1)",
                                        "rgb(73, 45, 168, 1)",
                                    ],
                                    borderColor: [
                                        "rgb(73, 45, 168)",
                                        "rgb(73, 45, 168)",
                                        "rgb(73, 45, 168)",
                                        "rgb(73, 45, 168)",
                                        "rgb(73, 45, 168)",
                                    ],
                                    borderWidth: 1,
                                    borderRadius: 36,
                                },
                            ],
                        }}
                    />
                </div>
            </div>

            <h1
                className={`font-semibold text-2xl text-center ${
                    cerai ? "" : "hidden"
                }`}
            >
                Statistik Perceraian per Tahun
            </h1>
            <div
                className={`flex justify-center w-full mt-19 ${
                    cerai ? "" : "hidden"
                }`}
            >
                <div className="w-[1000px]">
                    <Bar
                        data={{
                            labels: [
                                "2020",
                                "2021",
                                "2022",
                                "2023",
                                "2024",
                            ],
                            datasets: [
                                {
                                    label: "Perceraian",
                                    data: [500, 1000, 1250, 2000, 3000],
                                    backgroundColor: [
                                        "rgb(73, 45, 168, 1)",
                                        "rgb(73, 45, 168, 1)",
                                        "rgb(73, 45, 168, 1)",
                                        "rgb(73, 45, 168, 1)",
                                        "rgb(73, 45, 168, 1)",
                                    ],
                                    borderColor: [
                                        "rgb(73, 45, 168)",
                                        "rgb(73, 45, 168)",
                                        "rgb(73, 45, 168)",
                                        "rgb(73, 45, 168)",
                                        "rgb(73, 45, 168)",
                                    ],
                                    borderWidth: 1,
                                    borderRadius: 36,
                                },
                            ],
                        }}
                    />
                </div>
            </div>
            <div className="flex gap-20 justify-center items-center mt-13">
                <button
                  onClick={umurhadler}
                  className={` ${cerai ? "cursor-pointer hover:bg-[#492DA8] hover:text-white hover:shadow-[0_0_15px_rgba(73,45,168,0.5)]" : "shadow-[0_0_15px_rgba(73,45,168,0.5)]"}  border-2 w-[180px] h-[50px] rounded-full border-[#492DA8] text-[#210070] trasnsition duration-150 ease-in-out`}
                >
                  Data Pengguna
                </button>
                <button
                  onClick={ceraihadler}
                  className={` ${cerai ? "shadow-[0_0_15px_rgba(73,45,168,0.5)]" : "cursor-pointer hover:bg-[#492DA8] hover:text-white hover:shadow-[0_0_15px_rgba(73,45,168,0.5)]"} border-2 w-[180px] h-[50px] rounded-full border-[#492DA8] text-[#210070] `}
                >
                  Data Pencarian
                </button>

            </div>
           <div className="relative">
             <div className={`flex justify-center items-center text-center transition-all duration-200 ease-in-out mt-14 absolute left-[50%] -translate-x-[50%]   ${cerai ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}>
                <div className="border-2 rounded-2xl border-[#492DA8] max-w-160 px-4 py-8 relative">
                    <img
                        className="w-[38px] h-[38px] absolute -top-4 left-[50%] -translate-x-[50%]"
                        src="gambar/Desain tanpa judul (22) 1.png"
                        alt=""
                    />
                    <p>
                        Data diatas menunjukan banyaknya pengguna judi online di
                        Indonesia bisa kita ketahui bahkan anak anak dan remaja
                        sudah banyak yang memainkan judi online dan pengguna
                        terbanyak ada di orang dewasa dengan rata rata umur
                        31-50 tahun
                    </p>
                </div>
            </div>
            <div className={`flex justify-center items-center text-center transition-all duration-200 ease-in-out mt-14 ${cerai ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
                <div className="border-2 rounded-2xl border-[#492DA8] max-w-160 px-4 py-8 relative">
                    <img
                        className="w-[38px] h-[38px] absolute -top-6 left-[50%] -translate-x-[50%]"
                        src="gambar/Desain tanpa judul (21) 1.png"
                        alt=""
                    />
                    <p className="p">
                        Data diatas menunjukan angka perceraian yang meningkat
                        setiap tahunnya, kecanduan judi online menjadi salah
                        satu faktor yang mempengaruhi terlebih pada tahun 2024
                        sedang maraknya judi online yang semakin mudah diakses
                        dan banyak kasusnya
                    </p>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Statistik;
