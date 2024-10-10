import React from 'react';

interface CourseCardProps {
  title: string;
  number?: string;
  progress?: number;
  color?: string;
  icon?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, number, progress, color, icon }) => {
  if (number) {
    return (
      <div className={`${color} glassmorphism p-4 glow-effect`}>
        <div className="text-2xl font-bold text-white neon-text">{number}</div>
        <div className="text-sm text-white">{title}</div>
      </div>
    );
  }

  if (progress !== undefined) {
    return (
      <div className={`${color} glassmorphism p-6 glow-effect`}>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <div className="flex items-center">
          <div className="flex-grow">
            <div className="h-2 bg-white bg-opacity-20 rounded-full">
              <div
                className="h-2 bg-white rounded-full neon-border"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <span className="ml-4 text-white font-semibold neon-text">{progress}%</span>
        </div>
      </div>
    );
  }

  return (
    <div className="glassmorphism p-4 flex justify-between items-center glow-effect">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-[#9D4EDD] bg-opacity-30 rounded-lg flex items-center justify-center text-xl mr-4">
          {icon}
        </div>
        <div className="text-white">{title}</div>
      </div>
    </div>
  );
};

export default CourseCard;