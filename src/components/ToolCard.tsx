import React from 'react';

interface ToolCardProps {
  name: string;
  description: string;
  icon: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ name, description, icon }) => {
  return (
    <div className="glassmorphism p-4 flex justify-between items-center glow-effect">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-[#9D4EDD] bg-opacity-30 rounded-lg flex items-center justify-center text-xl mr-4">
          {icon}
        </div>
        <div>
          <div className="text-white font-semibold">{name}</div>
          <div className="text-gray-300 text-sm">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;