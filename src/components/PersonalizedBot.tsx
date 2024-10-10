import React from 'react';

const PersonalizedBot: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 bg-gradient-to-r from-deep-purple to-dark-blue rounded-full flex items-center justify-center mb-4">
        <span className="text-4xl">🤖</span>
      </div>
      <p className="text-center text-sm">Your AI Assistant</p>
      <button className="mt-4 bg-gradient-to-r from-deep-purple to-dark-blue px-4 py-2 rounded-full text-sm btn-gloss">
        Chat Now
      </button>
    </div>
  );
};

export default PersonalizedBot;