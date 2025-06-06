import React from 'react'
import ReactMarkdown from 'react-markdown'


interface Props {
  role: 'user' | 'assistant';
  content: string;
}

const MassageBuble = ({ role, content }: Props) => {
      const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2 px-28`}>
        <div className={`p-4 max-w-[75%] rounded-xl shadow text-lg whitespace-pre-wrap ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    </div>
  );
}

export default MassageBuble
