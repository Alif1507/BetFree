import Navbar from '@/Components/Navbar'
import axios from 'axios';
import { useState } from 'react';

const questions: string[] = [
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

type Answer = 'Ya' | 'Tidak';


const Forms = () => {
     const [answers, setAnswers] = useState<Answer[]>(Array(questions.length).fill('Tidak'));
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (index: number, value: Answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const correctCount = answers.filter((ans) => ans === 'Tidak').length;
    const wrongCount = answers.length - correctCount;

    try {
      await axios.post('/api/qna', {
        user_id: 1, // Ganti ini sesuai ID user yang login
        answers,
        correct_count: correctCount,
        wrong_count: wrongCount,
      });
      alert("Jawaban berhasil disimpan!");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menyimpan jawaban.");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6 text-center text-purple-600">Tes Kecanduan Judi</h1>
      {questions.map((question, idx) => (
        <div key={idx} className="mb-4">
          <p className="mb-2 font-medium text-gray-800">{idx + 1}. {question}</p>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name={`q-${idx}`}
                value="Ya"
                checked={answers[idx] === 'Ya'}
                onChange={() => handleChange(idx, 'Ya')}
                className="mr-1"
              />
              Ya
            </label>
            <label>
              <input
                type="radio"
                name={`q-${idx}`}
                value="Tidak"
                checked={answers[idx] === 'Tidak'}
                onChange={() => handleChange(idx, 'Tidak')}
                className="mr-1"
              />
              Tidak
            </label>
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        disabled={submitting}
        className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition"
      >
        {submitting ? "Mengirim..." : "Lihat Hasil"}
      </button>
    </div>
  )
}

export default Forms
