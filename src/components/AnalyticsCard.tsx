import React from 'react';

interface AnalyticsCardProps {
  title: string;
  percentage: string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, percentage }) => {
  return (
    <div className="glassmorphism p-6 glow-effect">
      <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
      <div className="flex items-end justify-between">
        <div className="text-4xl font-bold text-white neon-text">{percentage}</div>
        <div className="w-1/2 h-16 bg-[#9D4EDD] bg-opacity-30 rounded-lg"></div>
      </div>
    </div>
  );
};

export default AnalyticsCard;