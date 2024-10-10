import React from 'react';
import { ArrowRight } from 'lucide-react';

const PerformanceSection: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-[#3B82F6] text-sm font-semibold mb-2">Performance</h2>
      <h1 className="text-4xl font-bold mb-4">It's tiny — never ship unused CSS again.</h1>
      <p className="text-gray-400 mb-6 max-w-2xl">
        Tailwind automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be. In fact, most Tailwind projects ship less than 10kB of CSS to the client.
      </p>
      <button className="bg-[#1E40AF] text-white px-4 py-2 rounded-md flex items-center hover:bg-[#1E3A8A] transition-colors">
        Learn more
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
};

export default PerformanceSection;