import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const contents = [
  {
    left: {
      title: "Solusi",
      items: [
        "Batasi paparan judi online...",
        "Gantikan kesenangan judi dengan aktivitas...",
        "Jika sudah kecanduan berat, lakukan CBT...",
      ],
    },
    right: {
      title: "Dopamin dan mekanisme otak",
      content:
        "Judi Online merangsang sistem penghargaan di otak dengan melepaskan dopamin...",
    },
  },
  {
    left: {
      title: "Pencegahan",
      items: [
        "Buat batas waktu penggunaan gadget",
        "Diskusikan efek buruk dengan keluarga",
        "Fokus pada kegiatan sosial positif",
      ],
    },
    right: {
      title: "Lingkungan dan tekanan sosial",
      content:
        "Teman atau komunitas yang gemar judi bisa menjadi pemicu kuat untuk ikut bermain...",
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
    <div className="flex flex-col items-center mt-[200px] justify-center bg-white px-4 h-[1000px]">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold  text-transparent bg-gradient-to-r from-[#210070] to-[#af8bb8] bg-clip-text">Penyebab Judi Online</h1>
            <div className="bg-gradient-to-r mt-2 from-[#764CDF] to-[#ffffff] w-[400px] h-[4px] rounded-full mb-28">.</div>
        </div>

      <div className="relative flex items-center justify-center w-5xl h-96">
        {/* Kotak Kiri */}
        <motion.div
        key={index}
        initial={{ x: 500}}
        animate={{ x: isMoving ? 500 : 0 }}
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
                <span>▶</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Kotak Kanan */}
        <div className="absolute right-0 w-1/2 h-full p-6 bg-gradient-to-b from-[#3D0B84] to-[#A05FE0] text-white rounded-xl shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={rightContentIndex}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 p-6"
            >
              <h2 className="text-lg font-bold mb-3">
                {contents[rightContentIndex].right.title}
              </h2>
              <p className="text-sm">
                {contents[rightContentIndex].right.content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tombol Panah */}
        <button
  onClick={handleNext}
  disabled={isMoving}
  className="absolute right-4 bottom-4 bg-white text-purple-600 p-3 rounded-full shadow-md hover:bg-purple-100 transition"
>
  <span className="text-2xl font-bold">❯</span>
</button>
      </div>
    </div>
  );
};

export default Penyebab;
