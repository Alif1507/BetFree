import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const contents = [
    {
        left: {
            title: "Solusi",
            items: [
                "Batasi paparan judi online dengan menghindari paparan situs dan aplikasi yang memicu keinginan untuk berjudi",
                "Gantikan kesenangan judi dengan aktivitas yang bisa meningkatkan dopamin secara alami seperti olahraga, meditasi, atau hobi baru yang bermanfaat",
                "Jika sudah alami kecanduan yang berat ,lakukan terapi perilaku kognitif (CBT) bisa membantu pola pikir tentang judi",
            ],
        },
        right: {
            title: "Dopamin dan mekanisme otak",
            image:"/gambar/penyebab/e (8) 1.png",
            content:
                "Judi Online merangsang sistem penghargaan di otak dengan melepaskan dopamin, neurotransmitter yang berperan dalam perasaan senang dan kepuasan. Setiap kemenangan ,meskipun kecil memperkuat keinginan pengguna untuk tetap main, efek ini serupa dengan narkoba dan alkohol, dimana otak mengasosiasikan judi online dengan kesenangan dan kepuasan tersendiri",
        },
    },


    {
        left: {
            title: "Solusi",
            items: [
                "Gunakan fitur pemblokiran situs judi di perangkat atau melalui penyedia layanan internet",
                "Pasang aplikasi parental control atau software seperti Gamban dan BetBlocker untuk membatasi akses ke platform judi.",
                "Jika memungkinkan, ubah kebiasaan finansial dengan meminta pihak ketiga (misalnya keluarga) untuk mengawasi atau mengelola keuangan agar tidak digunakan untuk berjudi.",
            ],
        },
        right: {
            title: "Akses Mudah dan Anonimitas",
            image:"/gambar/penyebab/e (9) 1.png",
            content:
                "Judi online bisa dilakukan dimana saja hanya dengan menggunakan smartphone dan komputer, tidak ada batasan geografis sehingga para pemain dapat bermain tanpa hambatan regulasi dibeberapa negara. Dan anonimitas membuat pemain merasa lebih baik berjudi tanpa takut ketahuan oleh keluarga atau teman",
        },
    },


    {
        left: {
            title: "Solusi",
            items: [
                "Tingkatkan kesadaran bahwa judi online dirancang untuk membuat pemain kalah dalam jangka panjang (house always wins)",
                "Latih self-control dengan teknik seperti delayed gratification (menunda kepuasan) untuk menekan keinginan bertaruh",
                "Jika sering berpikir 'sekali lagi pasti menang,' coba tantang diri sendiri dengan pertanyaan: 'Apakah saya benar-benar bisa menang atau ini hanya trik psikologis?'",
            ],
        },
        right: {
            title: "Harapan Menang dan Efek “Near Miss”",
            image:"/gambar/penyebab/e (10) 1.png",
            content:
                "Pemain sering sekali terjebak dalam siklus bahwa mereka hampir menang (Nair Miss) sehingga mendorong para pemain untuk terus mencoba. Ketika kalah mereka terdorong untuk “membalas” kekalahan yang mereka alami dengan terus bertaruh lebih banyak, pemikiran “kali ini pasti menang” membuat seseorang sulit berhenti dari hal yang berbau pertaruhan ",
        },
    },

    {
        left: {
            title: "Solusi",
            items: [
                "Unfollow atau block akun media sosial yang mempromosikan judi online",
                "Gunakan AdBlocker untuk mencegah tampilan iklan judi di internet",
                "Jika terkena promosi bonus, ingat bahwa bonus itu bukan hadiah gratis, tetapi strategi untuk membuat pemain terus bertaruh lebih banyak",
            ],
        },
        right: {
            title: "Strategi Pemasaran Yang Menarik",
            image:"/gambar/penyebab/e (11) 1.png",
            content:
                "Situs judi online sering menggunakan promosi menarik, seperti bonus deposit, cashback, dan putaran gratis untuk memikat pemain baru dan mempertahankan pemain lama. Iklan yang ditargetkan secara digital melalui media sosial, situs web dan promosi dari influencer membuat judi tampak menjadi sesuatu yang menguntungkan",
        },
    },
    {
        left: {
            title: "Solusi",
            items: [
                "Batasi interaksi dengan lingkungan yang mendukung judi atau ajak mereka untuk memahami dampak buruknya",
                "Edukasi diri dan orang lain tentang bahaya judi, terutama bagi anak muda yang rentan terpengaruh",
                "Jika sering bermain game yang memiliki fitur perjudian (seperti loot box), pertimbangkan untuk menghindari atau membatasi penggunaannya",
            ],
        },
        right: {
            title: "Pengaruh Lingkungan dan Normalisasi Judi",
            image:"/gambar/penyebab/e (12) 1.png",
            content:
                "Lingkungan keluarga, teman dan sekitar yang terbiasa bermain judi dapat meningkatkan resiko kecanduan ,dan media, film, dan game yang menampilkan judi secara positif dan terlihat keren dapat membuat judi tampak normal dan tidak berbahaya ,apalagi kurangnya edukasi yang membuat seseorang semakin terjerumus kedalam dunia perjudian",
        },
    },
];

const Penyebab = () => {
    const [index, setIndex] = useState(0);
    const [isMoving, setIsMoving] = useState(false);
    const [rightContentIndex, setRightContentIndex] = useState(0);

    const handleNext = async () => {
        if (isMoving) return;

        setIsMoving(true);

        // Kotak kiri masuk (animasikan keluar)
        await new Promise((res) => setTimeout(res, 600));

        // Ganti konten kanan dengan animasi teks
        setRightContentIndex((prev) => (prev + 1) % contents.length);

        // Tunggu animasi kanan selesai
        await new Promise((res) => setTimeout(res, 600));

        // Ganti konten kiri
        setIndex((prev) => (prev + 1) % contents.length);

        setIsMoving(false);
    };

    return (
        <div className="flex flex-col items-center mt-[100px] justify-center bg-white px-4 h-[1000px] mb-93">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold  text-transparent bg-gradient-to-r from-[#210070] to-[#af8bb8] bg-clip-text">
                    Penyebab Judi Online
                </h1>
                <div className="bg-gradient-to-r mt-2 from-[#764CDF] to-[#ffffff] w-[400px] h-[4px] rounded-full mb-28">
                    .
                </div>
            </div>

            <div className="relative flex items-center justify-center w-5xl h-96 mt-20">
                {/* Kotak Kiri */}
                <motion.div
                    key={index}
                    initial={{ x: 500 }}
                    animate={{ x: isMoving ? 450 : 0 }}
                    exit={{ x: -500 }}
                    transition={{ duration: 0.6 }}
                    className="absolute left-0 w-1/2 h-[250px] p-6 bg-[#9747FF] rounded-xl text-white shadow-lg"
                >
                    <h1 className="text-xl font-semibold mb-3">
                        {contents[index].left.title}
                    </h1>
                    <ul className="space-y-2 text-sm">
                        {contents[index].left.items.map((item, i) => (
                            <li key={i} className="flex gap-2">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Kotak Kanan */}
                <div className="absolute right-10 w-[500px] h-[600px] p-6 bg-gradient-to-b from-[#3D0B84] to-[#A05FE0] text-white rounded-xl shadow-xl overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={rightContentIndex}
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -200, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 p-6 flex flex-col justify-evenly items-center space-y-4 text-center "
                        >
                            <h2 className="text-lg font-bold mb-3 flex">
                                {contents[rightContentIndex].right.title}
                            </h2>
                            <img className="w-[176px] h-[176px]" src={contents[rightContentIndex].right.image} alt="" />
                            <p className="text-base max-w-96">
                                {contents[rightContentIndex].right.content}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Tombol Panah */}
                <button
                    onClick={handleNext}
                    disabled={isMoving}
                    className="absolute -right-5 top-[50%] bg-white text-purple-600 p-3 rounded-full drop-shadow-2xl hover:bg-purple-100 transition"
                >
                    <span className="text-2xl font-bold">❯</span>
                </button>
            </div>
        </div>
    );
};

export default Penyebab;
