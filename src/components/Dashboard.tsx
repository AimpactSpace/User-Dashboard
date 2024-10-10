import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import AnalyticsCard from './AnalyticsCard';
import CourseCard from './CourseCard';
import AgendaItem from './AgendaItem';
import AINewsCard from './AINewsCard';
import ToolCard from './ToolCard';
import CreateContentBar from './CreateContentBar';

const Dashboard: React.FC = () => {
  return (
    <div className="w-full max-w-7xl glassmorphism p-8 grid grid-cols-3 gap-8">
      <div className="col-span-2 space-y-8">
        <CreateContentBar />
        
        <div className="grid grid-cols-2 gap-4">
          <AnalyticsCard title="My Courses" percentage="68%" />
          <div className="grid grid-cols-2 gap-4">
            <CourseCard number="1800" title="Minutes" color="bg-[#4EABF8] bg-opacity-20" />
            <CourseCard number="10" title="Courses" color="bg-[#9D4EDD] bg-opacity-20" />
          </div>
        </div>

        <CourseCard 
          title="Machine Learning Fundamentals" 
          progress={65} 
          color="bg-gradient-to-r from-[#4EABF8] to-[#9D4EDD] bg-opacity-20" 
        />

        <AINewsCard />

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Top Tools to Learn</h2>
          <div className="space-y-4">
            <ToolCard name="TensorFlow" description="Open-source machine learning framework" icon="🧠" />
            <ToolCard name="PyTorch" description="Open-source machine learning library" icon="🔥" />
            <ToolCard name="Scikit-learn" description="Machine learning library for Python" icon="🐍" />
          </div>
        </div>
      </div>

      <div className="glassmorphism p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">6 February</h2>
          <Calendar className="text-[#9D4EDD]" />
        </div>
        <div className="grid grid-cols-7 gap-2 mb-6">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="text-center text-sm text-gray-400">{day}</div>
          ))}
          {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
            <div
              key={date}
              className={`text-center p-2 rounded-full ${
                date === 6 ? 'bg-[#9D4EDD] bg-opacity-50 text-white' : 'text-gray-300'
              }`}
            >
              {date}
            </div>
          ))}
        </div>
        <h3 className="text-lg font-semibold mb-4 text-white">Your AI Agenda</h3>
        <div className="space-y-4">
          <AgendaItem title="Train NLP Model" time="10:30 - 11:30 AM" color="bg-[#F670C7]" />
          <AgendaItem title="Review AI Ethics Paper" time="1:00 - 2:00 PM" color="bg-[#4EABF8]" />
          <AgendaItem title="Implement Computer Vision Algorithm" time="3:00 - 4:00 PM" color="bg-[#9D4EDD]" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;