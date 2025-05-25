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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                layout
                className="font-bold text-2xl text-center mb-8"
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
    );
}

export default Statistik;
