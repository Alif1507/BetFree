import { useState } from 'react';
import axios from 'axios';
import MassageBuble from '@/Components/MassageBuble';

const Chatbot = () => {
   const [messages, setMessages] = useState<any[]>([]);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  

  const sendMessage = async () => {
    if (!prompt.trim()) return;

    const userMsg = { role: 'user', content: prompt };
    setMessages(prev => [...prev, userMsg]);
    setPrompt('');
    setLoading(true);

    try {
      const res = await axios.post('/chatbot', { prompt });
      const botMsg = { role: 'assistant', content: res.data.reply };
      setMessages(prev => [...prev, botMsg]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error: Tidak bisa menghubungi AI.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex bg-white">
        <div className="w-32 bg-gray-100 flex flex-col items-center pt-4">
           <img src="/gambar/B-removebg-preview 1.png" alt="" className='w-20 h-20' />
        </div>

        <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between px-6 py-4">
                <div className='flex flex-row items-center justify-center gap-3'>
                    <h1 className="text-3xl font-semibold text-purple-800">Bibot</h1>
                    <img src="/gambar/bibot-removebg-preview 1.png" alt=""/>
                </div>
                <button className="text-purple-800">
                    <svg className="w-10 h-8 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                    </svg>
                </button>
            </div>

        {messages.length === 0 && (
        <div className="flex-1 flex items-center justify-center">
            <h2 className="text-center text-3xl font-semibold font-[inter] bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-red-600">
                Halo, Apa Yang Ingin Anda Tanyakan
            </h2>
        </div>
        )}

        {messages.length > 0 && (
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, idx) => (
            <MassageBuble key={idx} role={msg.role} content={msg.content} />
            ))}
            {loading && (
            <MassageBuble role="assistant" content="Bibot sedang mengetik..." />
            )}
        </div>
        )}

    <div className="flex justify-center pb-18 items-center">
      <div className="w-full max-w-2xl flex items-center px-4 py-6 border rounded-xl shadow-md">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Tanyakan pada Bibot"
          className="flex-1 border-none focus:outline-none"
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="text-xl text-purple-600 mr-2 cursor-pointer">
          <img src="/gambar/send-message.png" alt="" className='w-5 h-5'/>
        </button>
      </div>
    </div>
  </div>
</div>


  );
};

export default Chatbot;
