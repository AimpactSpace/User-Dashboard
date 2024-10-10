import React from 'react';
import { Newspaper } from 'lucide-react';

const AINewsCard: React.FC = () => {
  return (
    <div className="glassmorphism p-6 glow-effect">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Newspaper className="mr-2 text-[#9D4EDD]" size={24} />
        Here's what happened yesterday...
      </h2>
      <ul className="space-y-3 text-gray-200">
        <li>• OpenAI announces GPT-4 with improved multimodal capabilities</li>
        <li>• Google's DeepMind achieves breakthrough in protein folding prediction</li>
        <li>• New AI model shows promising results in early cancer detection</li>
      </ul>
    </div>
  );
};

export default AINewsCard;