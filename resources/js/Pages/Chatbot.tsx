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
     <div className="h-screen flex flex-col bg-white">
      <div className="text-center text-xl font-bold mt-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-red-600">
        Halo, Apa Yang Ingin Anda Tanyakan
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <MassageBuble key={idx} role={msg.role} content={msg.content} />
        ))}
        {loading && (
          <MassageBuble role="assistant" content="Bibot sedang mengetik..." />
        )}
      </div>

      <div className="p-4 flex gap-2 border-t">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Tanyakan pada Bibot"
          className="flex-1 px-4 py-2 border rounded-full shadow"
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-purple-600 text-white px-4 py-2 rounded-full">
          +
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
