import React from 'react';

interface AgendaItemProps {
  title: string;
  time: string;
  color: string;
}

const AgendaItem: React.FC<AgendaItemProps> = ({ title, time, color }) => {
  return (
    <div className="flex items-center">
      <div className={`w-2 h-2 ${color} rounded-full mr-4`}></div>
      <div>
        <div className="font-semibold text-white">{title}</div>
        <div className="text-sm text-gray-400">{time}</div>
      </div>
    </div>
  );
};

export default AgendaItem;