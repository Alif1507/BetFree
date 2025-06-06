import { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const TesKecanduan = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [resultText, setResultText] = useState("");
  const [score, setScore] = useState(0);

  const questions = [
    "Apakah Anda sering merasa ingin berjudi meskipun tahu itu merugikan?",
    "Apakah Anda pernah menggunakan uang kebutuhan untuk berjudi?",
    "Apakah Anda pernah berbohong kepada keluarga atau teman tentang kebiasaan berjudi?",
    "Apakah Anda merasa gelisah atau stres jika tidak berjudi?",
    "Apakah Anda pernah mencoba berhenti berjudi tetapi gagal?",
    "Apakah Anda sering berpikir bahwa suatu hari nanti Anda akan menang besar dan semua masalah akan selesai?",
    "Apakah kamu pernah mencoba berhenti berjudi, tetapi gagal berulang kali?",
    "Apakah kamu pernah menggunakan uang pinjaman atau menjual barang demi berjudi?",
    "Apakah kamu merasa judi adalah satu-satunya cara untuk merasa senang atau melarikan diri dari masalah?",
    "Apakah kebiasaan berjudi kamu mulai mengganggu pekerjaan, sekolah, atau hubungan pribadi?",
  ];

  const handleAnswer = (index: number, value: string) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    const benar = answers.filter(ans => ans === "Tidak").length;
    setScore(benar);

    if (benar <= 5) setResultText("ANDA KECANDUAN");
    else if (benar <= 8) setResultText("PERBAIKI DIRI ANDA");
    else setResultText("SELAMAT ANDA BEBAS DARI KECANDUAN");

    setShowResult(true);
  };

  useEffect(() => {
  document.body.style.overflowY = showResult ? "scroll" : "auto";
}, [showResult]);

  return (
    <AuthenticatedLayout>


    <div className="min-h-screen flex items-center justify-center py-10 px-4 overflow-x-hidden">
      <div className="bg-white w-full max-w-[640px] rounded-xl shadow-xl">
        <div className="bg-[#CE3EF4] text-white rounded-t-xl p-4 text-md text-left font-[inter] flex items-center shadow-lg">
          <h1>Jawab pertanyaan dibawah ini untuk mengetahui seberapa besar tingkat kecanduan anda</h1>
          <img src="/gambar/e (16) 1.png" alt="" />
        </div>
        <div className="mt-8 mx-10 space-y-7 font-[inter]">
          {questions.map((q, idx) => (
            <div key={idx} className="text-md">
              <p className="mb-2">{idx + 1}. {q}</p>
              <div className="flex gap-4">
                <label className="flex items-center mt-2 gap-1 cursor-pointer">
                  <input
                    className="w-5 h-5 cursor-pointer"
                    type="radio"
                    name={`q${idx}`}
                    value="Ya"
                    checked={answers[idx] === "Ya"}
                    onChange={() => handleAnswer(idx, "Ya")}
                  />
                  Ya
                </label>
                <label className="flex items-center mt-2 gap-1 cursor-pointer">
                  <input
                    className="w-5 h-5 cursor-pointer"
                    type="radio"
                    name={`q${idx}`}
                    value="Tidak"
                    checked={answers[idx] === "Tidak"}
                    onChange={() => handleAnswer(idx, "Tidak")}
                  />
                  Tidak
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
            <button
            onClick={handleSubmit}
            disabled={answers.length < 10}
            className="flex justify-center items-center my-12 cursor-pointer text-white bg-gradient-to-r from-[#D500F9] to-[#8E24AA] px-[37px] py-[10px] rounded-xl disabled:opacity-50"
            >
            Lihat Hasil
            </button>
        </div>
      </div>

      {showResult && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white w-[85%] max-w-sm p-6 rounded-2xl text-center shadow-lg">
            <div className="text-3xl mb-3">⚠️</div>
            <h2 className="text-lg font-bold text-gray-800">{resultText}</h2>
            <p className="text-xl text-purple-600 font-bold mt-1 mb-4">{score}/10</p>
            <button
              onClick={() => setShowResult(false)}
              className=" items-center cursor-pointer my-2 text-white bg-gradient-to-r from-[#D500F9] to-[#8E24AA] px-[37px] py-[10px] rounded-xl"
            >
              AYO ATASI
            </button>
          </div>
        </div>
      )}
    </div>
    </AuthenticatedLayout>
  );
};

export default TesKecanduan;
