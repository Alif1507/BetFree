import React from 'react'


interface Props {
  role: 'user' | 'assistant';
  content: string;
}

const MassageBuble = ({ role, content }: Props) => {
      const isUser = role === 'user';
  return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`p-3 max-w-[75%] rounded-xl shadow text-sm whitespace-pre-wrap ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}>
        {content}
      </div>
    </div>
  );
}

export default MassageBuble
