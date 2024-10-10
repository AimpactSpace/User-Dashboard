import React from 'react';

const CreateContentBar: React.FC = () => {
  return (
    <div className="flex items-center glassmorphism neon-border p-2 glow-effect">
      <input
        type="text"
        placeholder="Create Content"
        className="flex-grow bg-transparent text-white placeholder-gray-400 outline-none px-4"
      />
      <button className="bg-[#9D4EDD] text-white px-6 py-2 rounded-full neon-text">
        Create
      </button>
    </div>
  );
};

export default CreateContentBar;