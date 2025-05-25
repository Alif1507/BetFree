import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
        borderRadius: number;
    }[];
}

function Statistik() {
    const [activeTab, setActiveTab] = useState<'pengguna' | 'perceraian'>('perceraian');

    const chartConfigs = {
        pengguna: {
            title: "Statistik umur para pengguna",
            data: {
                labels: ["<10 Tahun", "10-20 Tahun", "21-30 Tahun", "31-50 Tahun", ">50 Tahun"],
                datasets: [{
                    label: "UMUR",
                    data: [50000, 450000, 500000, 1800000, 1350000],
                    backgroundColor: Array(5).fill("linear-gradient(180deg, #492DA8 0%, #FFFFFF 100%)"),
                    borderColor: Array(5).fill("rgb(73, 45, 168)"),
                    borderWidth: 1,
                    borderRadius: 36,
                }],
            },
            description: "Data diatas menunjukan banyaknya pengguna judi online di Indonesia bisa kita ketahui bahkan anak anak dan remaja sudah banyak yang memainkan judi online dan pengguna terbanyak ada di orang dewasa dengan rata rata umur 31-50 tahun",
            icon: "gambar/Desain tanpa judul (22) 1.png"
        },
        perceraian: {
            title: "Statistik Perceraian per Tahun",
            data: {
                labels: ["2020", "2021", "2022", "2023", "2024"],
                datasets: [{
                    label: "Perceraian",
                    data: [500, 1000, 1250, 2000, 3000],
                    backgroundColor: Array(5).fill("linear-gradient(180deg, #492DA8 0%, #FFFFFF 100%)"),
                    borderColor: Array(5).fill("rgb(73, 45, 168)"),
                    borderWidth: 1,
                    borderRadius: 36,
                }],
            },
            description: "Data diatas menunjukan angka perceraian yang meningkat setiap tahunnya, kecanduan judi online menjadi salah satu faktor yang mempengaruhi terlebih pada tahun 2024 sedang maraknya judi online yang semakin mudah diakses dan banyak kasusnya",
            icon: "gambar/Desain tanpa judul (21) 1.png"
        }
    };

    const currentConfig = chartConfigs[activeTab];

    return (
<<<<<<< HEAD
        <div className="mt-40">
            <h1
                className={`font-semibold text-2xl text-center ${
                    cerai ? "hidden" : ""
                }`}
=======
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                layout
                className="font-bold text-2xl text-center mb-8"
>>>>>>> 9a19a0d9a5d4917d53d8f0f8e184c019d9446109
            >
                {currentConfig.title}
            </motion.h1>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center w-full"
                >
                    <div className="w-[1000px]">
                        <Bar data={currentConfig.data} />
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="flex gap-20 justify-center items-center mt-8">
                {['pengguna', 'perceraian'].map((tab) => (
                    <motion.button
                        key={tab}
                        onClick={() => setActiveTab(tab as 'pengguna' | 'perceraian')}
                        className={`border-2 p-2 rounded-full border-[#492DA8] text-[#210070] ${
                            activeTab === tab 
                                ? "shadow-[0_0_15px_rgba(73,45,168,0.5)] bg-[#492DA8] text-white" 
                                : "hover:bg-[#492DA8] hover:text-white hover:shadow-[0_0_15px_rgba(73,45,168,0.5)]"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {tab === 'pengguna' ? 'Data Pengguna' : 'Data Perceraian'}
                    </motion.button>
                ))}
            </div>

<<<<<<< HEAD
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
=======
            <div className="relative h-48 mt-14">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-1/2 -translate-x-1/2 w-full"
                    >
                        <div className="border-2 rounded-2xl border-[#492DA8] max-w-160 px-4 py-8 relative mx-auto">
                            <motion.img
                                src={currentConfig.icon}
                                alt=""
                                className="w-[38px] h-[38px] absolute -top-4 left-[50%] -translate-x-[50%]"
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                            <p className="text-center">{currentConfig.description}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
>>>>>>> 9a19a0d9a5d4917d53d8f0f8e184c019d9446109
    );
}

export default Statistik;
